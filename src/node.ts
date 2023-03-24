import * as http from 'http';
import * as url from 'url';
import * as fs from 'fs';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const q = url.parse(req.url, true);
  switch (q.pathname) {
    case '/':
      return res.end(JSON.stringify(q));
    case '/fs':
      try {
        if (!fs.existsSync('./fs')) {
          fs.mkdirSync('./fs');
        }
      } catch (err) {
        console.error(err);
      }
      return fs.appendFile('./fs/content.txt', 'Hello world', (err) => {
        if (err) throw err;
        return console.log('saved');
      });

    case '/fs/open':
      return fs.readFile('./fs/content.txt', (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end(data);
      });

    case '/fs/delete':
      return fs.unlink('./fs/content.txt', () => {
        return res.end('File deleted');
      });
    default:
      return res.end('No route found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
