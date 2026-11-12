plugins {
    id("com.android.application")
}

val dossierVersion = (project.findProperty("dossierVersion") as String?) ?: "1.2.0"
val dossierVersionCode = ((project.findProperty("dossierVersionCode") as String?) ?: "1").toInt()

android {
    namespace = "de.afdcheck"
    compileSdk = 35
    buildToolsVersion = "35.0.0"

    defaultConfig {
        applicationId = "de.afdcheck"
        minSdk = 24
        targetSdk = 35
        versionCode = dossierVersionCode
        versionName = dossierVersion
    }

    signingConfigs {
        create("release") {
            val storePath = System.getenv("DOSSIER_KEYSTORE")
                ?: (project.findProperty("dossierKeystore") as String?)
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
}

// Inhalte liegen in afd-check/www und werden beim Build in die Assets kopiert.
val copyCheckAssets by tasks.registering(Copy::class) {
    from(rootProject.file("../afd-check/www"))
    into(layout.projectDirectory.dir("src/main/assets"))
}

tasks.named("preBuild") {
    dependsOn(copyCheckAssets)
}
