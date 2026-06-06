# RetroPop Side-Widget

A tiny retro-pop Electron sidebar for Windows. It sits on the right edge of the desktop, opens with the pin button, and loads each tool as an independent HTML module through an iframe.

Windowsのデスクトップ右端に常駐する、レトロポップなElectronサイドバーウィジェットです。📍ボタンで開閉でき、各ツールはiframe経由で独立したHTMLモジュールとして読み込まれます。

---

## What It Does / できること

- Opens and closes with the pin button / 📍ボタンで開閉
- Uses a vivid 90s-inspired yellow/orange/black UI / 90年代風のビビッドなUI
- Switches between Cheat Sheet, ToDo, and Calendar tabs / チートシート・ToDo・カレンダーの3タブ
- Loads tab content from `contents/*.html` / タブコンテンツは `contents/*.html` で管理
- Lets other people add their own HTML widgets easily / 自分のウィジェットを簡単に追加できる
- Highlights today's date automatically in the calendar / カレンダーは今日の日付を自動ハイライト

---

## Project Structure / ファイル構成

```
my-sidebar-app
├── index.html
├── style.css
├── script.js
├── main.js
├── preload.js
├── package.json
├── install.cmd
├── start.cmd
├── contents
│   ├── cheat.html
│   ├── todo.html
│   ├── cal.html
│   └── content.css
└── README.md
```

---

## Run On Windows / 起動方法

Install Node.js first / まずNode.jsをインストール:

https://nodejs.org/

Then run / 次に実行:

```bat
install.cmd
start.cmd
```

Or use npm directly / またはnpmで直接:

```bash
npm install
npm start
```

---

## Add Your Own Tab / タブを追加する

1. Create a new file such as `contents/notes.html` / `contents/notes.html` などの新しいファイルを作成
2. Add the tab entry to the `tabs` array in `script.js` / `script.js` の `tabs` 配列にタブを追加
3. Restart the app with `start.cmd` / `start.cmd` でアプリを再起動

Example / 例:

```js
{
  id: "notes",
  title: "Notes",
  icon: "📒",
  src: "contents/notes.html"
}
```

---

## Notes / 備考

The ToDo tab is currently a sample widget. It does not save tasks yet. The calendar is generated in the browser and automatically moves the highlighted date when the day changes.

ToDoタブは現在サンプルウィジェットです。タスクの保存機能はまだありません。カレンダーはブラウザ上で生成され、日付が変わると自動でハイライトが移動します。
