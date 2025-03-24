const electron = require('electron')

electron.contextBridge.exposeInMainWorld('electron', {
  send: (channel:string, data: unknown) => electron.ipcRenderer.send(channel, data),
  close: () => electron.ipcRenderer.send('close-window'),
  minimize: () => electron.ipcRenderer.send('minimize-window'),
  toggleMaximize: () => electron.ipcRenderer.send('toggle-maximize'),
  setToken: (token: string) => electron.ipcRenderer.send('set-jwt', token),
  getToken: () => electron.ipcRenderer.invoke('get-jwt'),
  clearToken: () => electron.ipcRenderer.send('clear-jwt'),
})