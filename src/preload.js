const { contextBridge, ipcRenderer } = require('electron/renderer')
const { app, BrowserWindow } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
})

contextBridge.exposeInMainWorld('myAPI', {
  openNewTable: (table) => ipcRenderer.send('open-new-table', table),
  writeCSV: (data) => ipcRenderer.send('writeCSV', data),
  parseCSV: () => ipcRenderer.invoke('parseCSV')
})

