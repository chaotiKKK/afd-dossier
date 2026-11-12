package de.dossier.afd;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.print.PrintManager;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;

/**
 * Zeigt das Dossier aus den App-Assets in einem WebView.
 *
 * Die Seiten werden über eine virtuelle Herkunft (https://dossier.local/)
 * ausgeliefert, damit CSP, localStorage und relative Pfade wie im Desktop-
 * Browser funktionieren. Es gibt keine Netzwerkberechtigung: Quellenlinks
 * gehen an den Systembrowser, alles andere bleibt in der App.
 */
public class MainActivity extends Activity {

    private static final String HOST = "dossier.local";
    private static final String START_URL = "https://" + HOST + "/index.html";

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.setStatusBarColor(Color.parseColor("#11131A"));
        window.setNavigationBarColor(Color.parseColor("#11131A"));

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#FAF7F0"));
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setTextZoom(100);

        webView.addJavascriptInterface(new PrintBridge(), "DossierBridge");
        webView.setWebViewClient(new DossierClient());

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            webView.loadUrl(START_URL);
        }
    }

    /** Drucken/PDF-Schaltfläche der Oberfläche an den Android-Druckdienst reichen. */
    private final class PrintBridge {
        @JavascriptInterface
        public void printPage() {
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    PrintManager manager = (PrintManager) getSystemService(PRINT_SERVICE);
                    if (manager != null) {
                        manager.print("AfD-Dossier", webView.createPrintDocumentAdapter("AfD-Dossier"), null);
                    }
                }
            });
        }
    }

    private final class DossierClient extends WebViewClient {

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
            return handleUri(request.getUrl());
        }

        @Override
        @SuppressWarnings("deprecation")
        public boolean shouldOverrideUrlLoading(WebView view, String url) {
            return handleUri(Uri.parse(url));
        }

        private boolean handleUri(Uri uri) {
            if (HOST.equals(uri.getHost())) {
                return false;
            }
            // Quellen im Systembrowser öffnen, nie in der App.
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, uri));
            } catch (Exception ignored) {
                // Kein Browser installiert – Link bleibt wirkungslos.
            }
            return true;
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            Uri uri = request.getUrl();
            if (!HOST.equals(uri.getHost())) {
                return null;
            }
            String path = uri.getPath();
            if (path == null || path.isEmpty() || "/".equals(path)) {
                path = "/index.html";
            }
            String assetPath = path.substring(1);
            try {
                InputStream stream = getAssets().open(assetPath);
                return new WebResourceResponse(mimeOf(assetPath), "UTF-8", stream);
            } catch (IOException e) {
                return null;
            }
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            // window.print() der Desktop-Oberfläche auf den Druckdienst umlegen.
            view.evaluateJavascript(
                "(function(){if(!window.DossierBridge){return;}" +
                "window.print=function(){window.DossierBridge.printPage();};})();",
                null);
        }
    }

    private static String mimeOf(String assetPath) {
        String lower = assetPath.toLowerCase(Locale.GERMAN);
        if (lower.endsWith(".html") || lower.endsWith(".htm")) {
            return "text/html";
        }
        if (lower.endsWith(".css")) {
            return "text/css";
        }
        if (lower.endsWith(".js")) {
            return "application/javascript";
        }
        if (lower.endsWith(".json")) {
            return "application/json";
        }
        if (lower.endsWith(".svg")) {
            return "image/svg+xml";
        }
        if (lower.endsWith(".png")) {
            return "image/png";
        }
        return "application/octet-stream";
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
            return;
        }
        super.onBackPressed();
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        if (webView != null) {
            webView.saveState(outState);
        }
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
            webView = null;
        }
        super.onDestroy();
    }
}
