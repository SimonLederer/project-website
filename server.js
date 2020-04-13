const express = require("express");
app = express();

app.listen(8000, () => {
  console.log("Listening on port 8000");
});

app.use(express.static(__dirname + "/res"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/res/sites/index.html");
});

app.get("/projects", (req, res) => {
  res.sendFile(__dirname + "/res/sites/projects.html");
});

// Catching 404s -- Keep this at the bottom
app.use(function (req, res, next) {
  res.status(404).send("Sorry I can't find that!");
});
