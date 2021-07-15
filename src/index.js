const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require("method-override");
const port = 3000;

const route = require("./routes");
const db = require("./config/db");

// Connect to db
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routes inits
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
