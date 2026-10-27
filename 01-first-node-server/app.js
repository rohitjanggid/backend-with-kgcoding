const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Complete coding</title></head>");
    res.write("<body><h1>Welcome to complete coding</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/product") {
    res.write("<html>");
    res.write("<head><title>Complete coding</title></head>");
    res.write("<body><h1>chackout our product</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>Complete coding</title></head>");
  res.write("<body><h1>my name is rohit jangid</h1></body>");
  res.write("</html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server runing at http://localhost:${PORT}`);
});
