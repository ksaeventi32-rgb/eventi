# Eventi

This is a static landing page for the Eventi project. To view and test it locally you need to serve the files over HTTP; opening the file directly in the browser will work for most pages, but some features (e.g. `fetch` in `script.js`) require a server.

## Quick start

You have several options depending on what tools you have:

### 1. **Node.js (recommended)**

1. Install [Node.js](https://nodejs.org/) if you don't already have it.
2. From the project root run:
   ```bash
   npm install
   npm start
   ```
3. Open your browser to `http://localhost:8080` (port may vary; check the terminal output).

This uses the `http-server` package configured in `package.json`.

### 2. **Python 3**

In a PowerShell terminal run:

```powershell
cd "C:\Users\DELL I3\Desktop\eventi"
python -m http.server 8000
```

Then navigate to `http://localhost:8000`.

### 3. **Live Server extension (VS Code)**

- Install the **Live Server** extension in VS Code.
- Open `index.html` and click the "Go Live" button in the status bar.

### 4. **Double‑click (file://)**

You can also open `index.html` directly in your browser, though AJAX forms and some other behaviors may be restricted.

---

If you encounter console errors after the page loads, open the developer tools and check the **Console** tab for messages.

Feel free to ask if you'd like help with anything else!