const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/files", function (req, res) {
  const dirPath = path.join(__dirname, "files");
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).json({
        error: "Unable to read directory",
      });
    } else {
      res.json(files);
    }
  });
});

app.get("/file/:filename", function (req, res) {
  const filePath = path.join(__dirname, "files", req.params.filename);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }

    res.setHeader("Content-Type", "application/json");
    res.send(
      JSON.stringify({
        filename: req.params.filename,
        content: data,
      })
    );
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

app.post("/", function (req, res) {});

app.put("/", function (req, res) {});

app.delete("/", function (req, res) {});

app.listen(3000);
