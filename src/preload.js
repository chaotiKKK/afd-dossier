'use strict';

const { contextBridge } = require('electron');

// Nur unkritische Laufzeitinformationen an die Oberfläche geben.
contextBridge.exposeInMainWorld('dossierEnv', {
  electron: process.versions.electron,
  chrome: process.versions.chrome,
  platform: process.platform
});
