const express = require("express");
const path = require("path");
const { exec } = require("child_process");

const app = express();

app.use(express.static(path.resolve(__dirname, "dist")));

app.get("/*", (req, res) => {
  console.log("request");
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

app.listen(8000, () => {
  console.log("Server 8000 running...");
  exec("start http://localhost:8000");
  exec("open http://localhost:8000");
  exec("xdg-open http://localhost:8000");
});
