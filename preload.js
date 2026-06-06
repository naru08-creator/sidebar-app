const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  setSidebarOpen: (isOpen) => ipcRenderer.send("set-sidebar-open", isOpen)
});