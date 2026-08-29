const http = require('http');

const { requesthandler } = require('./handler');

const server = http.createServer(requesthandler);

const PORT = 3100;

server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
}); 