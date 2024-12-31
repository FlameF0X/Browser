app.whenReady().then(createWindow);

// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  setTitle: (title) => {
    if (typeof title === 'string') {
      document.title = `FlameFox Browser - ${title}`;
    }
  }
});