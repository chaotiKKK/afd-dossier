package de.afdcheck;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.Window;
import android.webkit.ConsoleMessage;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;

/**
 * Zeigt die Check-Oberfläche aus den App-Assets.
 *
 * Ausgeliefert wird über eine virtuelle Herkunft, damit CSP und relative Pfade
 * greifen. Die App hat keine Netzwerkberechtigung; Quellenlinks gehen an den
 * Systembrowser.
 */
public class MainActivity extends Activity {

    private static final String HOST = "afdcheck.local";
    private static final String START_URL = "https://" + HOST + "/index.html";
    private static final String TAG = "AfDCheck";

    private WebView webView;

    @SuppressLint("SetJavaScriptEnabled")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.setStatusBarColor(Color.parseColor("#16171B"));
        window.setNavigationBarColor(Color.parseColor("#16171B"));

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor("#F6F3EC"));
        setContentView(webView);

        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setAllowContentAccess(false);
        settings.setSupportZoom(false);
        settings.setBuiltInZoomControls(false);
        settings.setTextZoom(100);

        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onConsoleMessage(ConsoleMessage message) {
                Log.i(TAG, "CONSOLE " + message.message() + " @" + message.lineNumber());
                return true;
            }
        });
        webView.setWebViewClient(new CheckClient());

        if (savedInstanceState != null) {
            webView.restoreState(savedInstanceState);
        } else {
            webView.loadUrl(START_URL);
        }
    }

    private final class CheckClient extends WebViewClient {

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
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, uri));
            } catch (Exception ignored) {
                // Kein Browser installiert.
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
            try {
                InputStream stream = getAssets().open(path.substring(1));
                return new WebResourceResponse(mimeOf(path), "UTF-8", stream);
            } catch (IOException e) {
                Log.w(TAG, "ASSET_FEHLT " + path);
                return null;
            }
        }

        @Override
        public void onPageFinished(WebView view, String url) {
            // Statistik ins Logcat, damit der Build automatisiert prüfbar ist.
            view.evaluateJavascript(
                "(function(){try{return JSON.stringify(window.__CHECK_STATS__||null);}catch(e){return null;}})();",
                value -> Log.i(TAG, "STATS " + value));

        }
    }

    private static String mimeOf(String path) {
        String lower = path.toLowerCase(Locale.GERMAN);
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
        if (lower.endsWith(".png")) {
            return "image/png";
        }
        return "application/octet-stream";
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
