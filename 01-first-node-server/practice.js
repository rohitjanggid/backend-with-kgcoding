const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.write('<html>');
    res.write('<head><title>Myntra</title></head>');
    res.write('<body>');
    res.write('<a href="/home">Home</a><br>')
    res.write('<a href="/men">Men</a><br>')
    res.write('<a href="/women">Women</a><br>')
    res.write('<a href="/kids">Kids</a><br>')
    res.write('<a href="/carts">Carts</a><br>')
    res.write('</body>')
    res.write('</html>');
    return res.end();
  } else if (req.url === "/home") {
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body><h1>Welcome to Home</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body><h1>Welcome to Men</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body><h1>Welcome to Women</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body><h1>Welcome to Kids</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/carts") {
    res.write("<html>");
    res.write("<head><title>Myntra</title></head>");
    res.write("<body><h1>Welcome to Carts</h1></body>");
    res.write("</html>");
    return res.end();
  }

  res.write("<html>");
  res.write("<head><title>Myntra</title></head>");
  res.write("<body><h1>Rohit Jangid here!</h1></body>");
  res.write("</html>");
  return res.end();
});


const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server runing at http://localhost:${PORT}`);
})