const sumRequestHandler = (req, res) => {
  console.log("1", req.url);
  const body = [];
  let result;
  req.on("data", (chunk) => {
    body.push(chunk);
    console.log("2")
  });
  req.on("end", () => {
    console.log("3")
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = Number(bodyObj.first) + Number(bodyObj.second);
    console.log("4")
  });
  console.log("5")
  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
      <head><title>calculator</title></head>
      <body>
      <h1>Your sum is : ${result} </h1>
      </body>
      </html>
      `);
  return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
