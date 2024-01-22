const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header to indicate that the content is HTML
  res.setHeader('Content-Type', 'text/html');

  // Send the response
  res.end('<h1>Hello Node!!!!</h1>');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
