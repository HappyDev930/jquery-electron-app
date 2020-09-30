require('electron-reload')(__dirname,{ignored: /data|[\/\\]\./});
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
	const mainWindow = new BrowserWindow({
		width: 992, 
		height: 630,
		frame: false,
		darkTheme: true,
		backgroundColor: "#03213a",
		resizable: false,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			enableRemoteModule: true
		}
	})

	mainWindow.loadFile('./app/templates/dashboard.html')

	mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
	createWindow()
  
	app.on('activate', function () {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') app.quit()
})
