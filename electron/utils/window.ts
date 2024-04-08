

export function getClientPixel(): { width: number, height: number } {
    return {
        width: Electron.screen.getPrimaryDisplay().workAreaSize.width,
        height: Electron.screen.getPrimaryDisplay().workAreaSize.height
    }
}