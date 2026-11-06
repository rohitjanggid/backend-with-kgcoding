const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("First dummy middleware", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("Second dummy middleware", req.url, req.method);
  next();
});

// app.use("/", (req, res, next) => {
//   console.log("Third middleware", req.url, req.method);
//   res.send("<h1>Welcome to third middleware </h1>");
// });

app.get("/", (req, res, next) => {
  console.log("handling / for GET", req.url, req.method);
  res.send("<h1>Welcome to Complete Coding</h1>");
});

app.get("/contect-us", (req, res, next) => {
  console.log("handling /contect-us for GET");
  res.send(`
    <h1>Please give your details hare! </h1>
    <form action="/contect-us" method="POST">
    <label for="username">username</label><br>
    <input type="text" id="username" name="username" placeholder="Enter username"><br>
    <label for="email">email</label><br>
    <input type="email" id="email" name="email" placeholder="Enter email"><br>
    <input type="submit">
    </form>
    `);
});

app.post("/contect-us", (req, res, next) => {
  console.log("Handling /contect-us for POST")
  res.send(`<h1>Verification successfull`)
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server runing at address http://localhost:${PORT}`);
});
