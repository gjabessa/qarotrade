const http = require("http");
const fs = require("fs");
const hostname = "127.0.0.1";
const port = 3000;
const express = require("express");

const app = express();
app.use("/", express.static("public"));
app.use((req, res, next) => {
  res.status(404).send("<h1> Page not found </h1>");
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
