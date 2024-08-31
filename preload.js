const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    showMessage: () => ipcRenderer.invoke('show_message')
})
