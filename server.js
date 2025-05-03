const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/features', (req, res) => {
    res.sendFile(path.join(__dirname, 'features.html'));
});

app.get('/download', (req, res) => {
    res.sendFile(path.join(__dirname, 'download.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server');
}); 