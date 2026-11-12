plugins {
    id("com.android.application")
}

// Version kommt vom Tag (CI) oder aus package.json (lokal).
val dossierVersion = (project.findProperty("dossierVersion") as String?) ?: "1.0.0"
val dossierVersionCode = ((project.findProperty("dossierVersionCode") as String?) ?: "1").toInt()

android {
    namespace = "de.dossier.afd"
    compileSdk = 35
    buildToolsVersion = "35.0.0"

    defaultConfig {
        applicationId = "de.dossier.afd"
        minSdk = 24
        targetSdk = 35
        versionCode = dossierVersionCode
        versionName = dossierVersion
    }

    signingConfigs {
        create("release") {
            val storePath = System.getenv("DOSSIER_KEYSTORE")
                ?: (project.findProperty("dossierKeystore") as String?)
            // Relative Pfade gelten ab dem Projektwurzelverzeichnis (android/).
            val storeCandidate = storePath?.let { rootProject.file(it) }
            if (storeCandidate != null && storeCandidate.exists()) {
                storeFile = storeCandidate
                storePassword = System.getenv("DOSSIER_KEYSTORE_PASSWORD")
                    ?: (project.findProperty("dossierKeystorePassword") as String?)
                keyAlias = System.getenv("DOSSIER_KEY_ALIAS")
                    ?: (project.findProperty("dossierKeyAlias") as String?) ?: "dossier"
                keyPassword = System.getenv("DOSSIER_KEY_PASSWORD")
                    ?: (project.findProperty("dossierKeyPassword") as String?)
            }
        }
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            // Ohne Keystore (z. B. lokaler Test) mit dem Debug-Schlüssel signieren.
            signingConfig = if (signingConfigs.getByName("release").storeFile != null) {
                signingConfigs.getByName("release")
            } else {
                signingConfigs.getByName("debug")
            }
        }
    }

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }

    packaging {
        resources.excludes += setOf("META-INF/*.kotlin_module")
    }
}

// Die Web-Oberfläche bleibt die einzige Quelle: src/ wird in die Assets kopiert.
val copyWebAssets by tasks.registering(Copy::class) {
    from(rootProject.file("../src")) {
        include("index.html", "styles.css", "app.js", "data/**")
    }
    into(layout.projectDirectory.dir("src/main/assets"))
}

tasks.named("preBuild") {
    dependsOn(copyWebAssets)
}
