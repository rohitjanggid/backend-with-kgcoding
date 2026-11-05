const http = require('http');
const requesthandler = require('./handler');

const server = http.createServer(requesthandler);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server runing at http://localhost:${PORT}`);
})