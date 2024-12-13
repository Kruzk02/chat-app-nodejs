var http = require('http');
const connectDB = require('../src/configs/DatabaseConfig');

connectDB();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('Hello World!');
});

server.on('error', (err) => {
  console.error('HTTP Server Error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});
