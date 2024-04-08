import { app, BrowserWindow } from 'electron'
import path from 'path'

export let mainWindow: BrowserWindow

export function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 120,
        height: 120,
        type: "toolbar",
        frame: false,
        resizable: false,
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            preload: path.join(__dirname, "./preload/index.ts")
        }
    })
}

