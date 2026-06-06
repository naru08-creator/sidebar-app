const { app, BrowserWindow, screen, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const { workArea } = screen.getPrimaryDisplay();
  const closedWidth = 146;
  const openWidth = 420;
  const height = Math.min(720, workArea.height);

  const win = new BrowserWindow({
    width: openWidth,
    height,
    x: workArea.x + workArea.width - openWidth,
    y: workArea.y,
    frame: false,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    backgroundColor: "#00000000",
    transparent: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js")
    }
  });

  win.loadFile(path.join(__dirname, "index.html"));

  ipcMain.on("set-sidebar-open", (_event, isOpen) => {
    const { workArea } = screen.getPrimaryDisplay();
    const openWidth = 420;
    const width = isOpen ? openWidth : closedWidth;

    win.setBounds({
      x: workArea.x + workArea.width - width,
      y: workArea.y,
      width,
      height: Math.min(720, workArea.height)
    });
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});