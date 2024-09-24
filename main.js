const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const fs = require('fs');

ipcMain.handle('parseCSV', () => {
  const data = fs.readFileSync('./src/users.csv', 'utf-8');
  return data.split('\n').map((row) => row.split(','))
}
)
ipcMain.handle('writeCSV', () => {
  const data = fs.readFileSync('./src/users.csv', 'utf-8');
  fs.writeFileSync('./src/users.csv', data + '\n' + '12,23', 'utf-8')
}
)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  });

  win.loadFile('index.html')
  win.webContents.openDevTools() // открывает инструменты разработчика в приложении

  ipcMain.on('open-new-table', (event, table) => {
    const win = new BrowserWindow({
      width: 500,
      height: 500,
      webPreferences: {
        preload: path.join(__dirname, 'src/preload.js')
      }
    });

    win.loadFile('user.html')
    win.webContents.openDevTools()
  })
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
