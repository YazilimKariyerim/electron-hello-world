const { app, BrowserWindow, dialog, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    ipcMain.handle('show_message', () => {
        dialog.showMessageBox(null, {
            "message": "Hello, from main window!",
        })
    })
    createWindow()
});
