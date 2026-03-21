const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
  const file = path.join(__dirname, 'public', 'index.html');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
