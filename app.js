const WebSocket = require('ws');
const { exec } = require('child_process');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Nowe połączenie WS');
});

wss.on('listening', () => {
    console.log('Serwer nasłuchuje na porcie 8080');

    // Dla Windows
    exec('start "" index.html', (err) => {
        if (err) console.error('Błąd przy otwieraniu index.html:', err);
    });

    // Dla macOS
    // exec('open index.html');

    // Dla Linux
    // exec('xdg-open index.html');
});
