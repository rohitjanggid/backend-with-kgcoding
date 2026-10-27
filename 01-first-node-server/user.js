const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Complete Coding</title></head>");
    res.write("<body>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="test" name="username" placeholder="Enter your name"/><br>',
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" id="female" name="gender" value="female"/><br>',
    );
    res.write('<input type="submit" value="submit"/>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "Rohit jangid");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server runing at http://localhost:${PORT}`);
});
