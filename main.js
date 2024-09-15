const { app, BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 800
  })

  win.loadFile('index.html')
  // win.webContents.openDevTools() - открывает инструменты разработчика в приложении
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow() // эта строка открывает окно на Маке, если у нашего приложения нет открытых окон, но мы его вызвали
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit() // эта строка выключает приложение на винде и линуксе, если закрыты все его окна
})
