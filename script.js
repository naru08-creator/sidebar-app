const tabs = [
  {
    id: "cheat",
    title: "Cheat Sheet",
    icon: "📝",
    src: "contents/cheat.html"
  },
  {
    id: "todo",
    title: "ToDo",
    icon: "✅",
    src: "contents/todo.html"
  },
  {
    id: "cal",
    title: "Calendar",
    icon: "📅",
    src: "contents/cal.html"
  }
];

const sidebar = document.querySelector("#sidebar");
const toggleButton = document.querySelector("#toggleButton");
const tabBar = document.querySelector("#tabBar");
const frame = document.querySelector("#contentFrame");
const activeTitle = document.querySelector("#activeTitle");

function setSidebarOpen(isOpen) {
  sidebar.classList.toggle("is-open", isOpen);
  toggleButton.setAttribute("aria-expanded", String(isOpen));
  toggleButton.setAttribute("aria-label", isOpen ? "Close sidebar" : "Open sidebar");
  window.electronAPI?.setSidebarOpen(isOpen);
}

function activateTab(tabId) {
  const selectedTab = tabs.find((tab) => tab.id === tabId) || tabs[0];

  frame.src = selectedTab.src;
  activeTitle.textContent = selectedTab.title;

  tabBar.querySelectorAll(".tab-button").forEach((button) => {
    const isActive = button.dataset.tabId === selectedTab.id;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderTabs() {
  tabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.className = "tab-button";
    button.type = "button";
    button.dataset.tabId = tab.id;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-label", tab.title);
    button.setAttribute("aria-selected", String(index === 0));
    button.textContent = tab.icon;
    button.addEventListener("click", () => {
      activateTab(tab.id);
      setSidebarOpen(true);
    });
    tabBar.appendChild(button);
  });
}

toggleButton.addEventListener("click", () => {
  setSidebarOpen(!sidebar.classList.contains("is-open"));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setSidebarOpen(false);
  }
});

renderTabs();
activateTab(tabs[0].id);
setSidebarOpen(true);
