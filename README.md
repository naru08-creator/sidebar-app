# RetroPop Side-Widget

A tiny retro-pop Electron sidebar for Windows. It sits on the right edge of the desktop, opens with the pin button, and loads each tool as an independent HTML module through an iframe.

## What It Does

- Opens and closes with the pin button
- Uses a vivid 90s-inspired yellow/orange/black UI
- Switches between Cheat Sheet, ToDo, and Calendar tabs
- Loads tab content from `contents/*.html`
- Lets other people add their own HTML widgets easily
- Highlights today's date automatically in the calendar

## Project Structure

```text
my-sidebar-app
|-- index.html
|-- style.css
|-- script.js
|-- main.js
|-- preload.js
|-- package.json
|-- package-lock.json
|-- install.cmd
|-- start.cmd
|-- contents
|   |-- cheat.html
|   |-- todo.html
|   |-- cal.html
|   `-- content.css
`-- README.md
```

## Run On Windows

Install Node.js first:

https://nodejs.org/

Then run:

```bat
install.cmd
start.cmd
```

Or use npm directly:

```bash
npm install
npm start
```

## Add Your Own Tab

1. Create a new file such as `contents/notes.html`.
2. Add the tab entry to the `tabs` array in `script.js`.
3. Restart the app with `start.cmd`.

Example:

```js
{
  id: "notes",
  title: "Notes",
  icon: "NOTE",
  src: "contents/notes.html"
}
```

## Notes

The ToDo tab is currently a sample widget. It does not save tasks yet. The calendar is generated in the browser and automatically moves the highlighted date when the day changes.
