const path = require("path");
const express = require("express");
const hbs = require("hbs");
const getTemprature = require("./temprature.js");

const app = express();

//Define paths
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Tejasv App",
    name: "Tejasv Agarwal",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Tejasv Agarwal",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text",
    title: "Help",
    name: "Tejasv Agarwal",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Please specify the location",
    });
  }
  getTemprature(req.query.address, (error, temp) => {
    if (error) {
      return res.send({
        error: error,
      });
    } else {
      res.send({
        temprature: temp,
        location: req.query.address,
      });
    }
  });
});

app.get("/*", (req, res) => {
  res.send("hehe");
});

app.listen(3000, () => {
  console.log("app is running");
});
