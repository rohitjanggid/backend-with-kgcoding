const {sumRequestHandler} = require('./sum');

const requesthandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>calculator</title></head>");
    res.write("<body><h1>Welcome to Calculator</h1>");
    res.write('<a href="/calculator">Go to calculator</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if ((req.url === "/calculator")) {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>calculator</title></head>");
    res.write("<body>");
    res.write('<form action="/calculate-result" method="POST">');
    res.write('<input type="text" placeholder="First num" name="first"></br>');
    res.write('<input type="text" placeholder="Second num" name="second"><br>');
    res.write('<input type="submit" value="Sum">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req, res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>calculator</title></head>");
  res.write("<body><h1>404 page not found</h1>");
  res.write('<a href="/">Go to home</a>');
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

module.exports = requesthandler;
