const http = require('http');
const _data = require('./data')

const server = {}

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encrypted ? 's' : ''}://${req.headers.host}`;
    const parsedURL = new URL(req.url, baseURL);
    const parsedPathName = parsedURL.pathname;
    let trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');

    req.on('data', (data) => {
        console.log('uzklausa atsiunte duomenu...');
        console.log(data);
    })

    req.on('end', async (data) => {
        if (trimmedPath === '') {
            //HOME PAGES
            const html = await _data.readHTML('index');
            return res.end(html);
        }

        if (trimmedPath === 'about') {
            //ABOUT PAGES
            const html = await _data.readHTML('about');
            return res.end(html);
        }

        return res.end('Kitas turinys');
    })
});

server.init = () => {
    server.httpServer.listen(3000, () => {
        console.log('#### Tavo severis yra psiekiamas http://localhost:3000');
    })
}

module.exports = server;