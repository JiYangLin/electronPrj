const { app, BrowserWindow } = require('electron')

let win// 保持对window对象的全局引用
function createWindow () {

  win = new BrowserWindow({ width: 800, height: 600 })
  win.loadFile('index.html')

  win.webContents.openDevTools()  // 打开开发者工具

  win.on('closed', () => {
    win = null
  })
}


app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})