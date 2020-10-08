const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

app.listen(8000, () => {
  console.log("Server is started at 8000 port");
});
