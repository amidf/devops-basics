const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.sendFile(path.resolve("./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT} port`);
});
