const express = require("express");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const port = 3000;

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.send(home);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
