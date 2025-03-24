import { app, BrowserWindow, ipcMain, nativeImage } from 'electron'
import path from 'node:path'
import { getPreloadPath } from './pathResolver.js'
import { getWindowBounds, setWindowBounds } from './utils/windowBoundsController.js';
import { clearToken, getToken, setToken } from './utils/tokenController.js';

let mainWindow: Electron.BrowserWindow | null

function createWindow() {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/desktopIcon.png`)

  if (app.dock) {
    app.dock.setIcon(icon)
  }

  mainWindow = new BrowserWindow({
    ...getWindowBounds(),
    icon,
    minWidth: 1400,
    minHeight: 800,
    frame: false,
    webPreferences: {
      preload: getPreloadPath(),
    }
  })

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173')
  } else {
    mainWindow.loadFile(path.join(app.getAppPath() + '/dist-react/index.html'))
  }

  mainWindow.on("resize", () => {
    if (!mainWindow) {
      return
    }

    const bounds = mainWindow.getBounds();
    setWindowBounds({ width: bounds.width, height: bounds.height, x: bounds.x, y: bounds.y });
  });

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}


app.on('ready', () => {
  createWindow()
  // autoUpdater.checkForUpdates()
})

ipcMain.on('close-window', () => {
  app.quit()
})

ipcMain.on('minimize-window', () => {
  mainWindow?.minimize()
})

ipcMain.on('toggle-maximize', () => {
  const window = mainWindow

  if (!window) return

  if (process.platform === 'darwin') {
    window.setFullScreen(!window.isFullScreen())
  } else {
    if (window.isMaximized()) {
      window.unmaximize()
    } else {
      window.maximize()
    }
  }
})

ipcMain.on('set-jwt', async (_, token: string) => {
  setToken(token)
})

ipcMain.handle('get-jwt', async () => {
  return getToken()
})

ipcMain.on('clear-jwt', async () => {
  clearToken()
})