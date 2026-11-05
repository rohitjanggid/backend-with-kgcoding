const { error } = require("console");
const fs = require("fs");

const userRequestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
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
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const parms = new URLSearchParams(parsedBody);
      const bodyObj = {};
      for (const [key, value] of parms.entries()) {
        bodyObj[key] = value;
      }
      console.log(bodyObj);
      fs.writeFile("user.txt", JSON.stringify(bodyObj), (error) => {
        console.log("Data written successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
};

module.exports = userRequestHandler;
