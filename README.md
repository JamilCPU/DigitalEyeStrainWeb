# DigitalEyeStrainWeb

The marketing website for Digital Eye Strain Helper, a desktop app that reminds you to take regular breaks to reduce eye strain. The site has a home page, a features page and a download page that points visitors to the app's GitHub repository (JamilCPU/DigitalEyeStrainHelper). It is a small static site served by Express.

## Stack

- Node.js and Express 4 (static file server)
- Plain HTML, CSS and JavaScript (a copy-to-clipboard button on the download page)

## Running

Requires Node.js.

```bash
npm install
npm start
```

Then open `http://localhost:3000`. Routes: `/`, `/features` and `/download`.

## Project layout

- `server.js` - Express server serving the HTML pages and static assets
- `index.html`, `features.html`, `download.html` - the three pages
- `styles.css`, `script.js` - shared styling and the clipboard helper

## Status

Small and complete as a static site. It has no build step or tests.
