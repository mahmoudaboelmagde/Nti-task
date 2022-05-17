require("dotenv").config();
const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

const viewsDir = path.join(__dirname, "./views");
const layoutsDir = path.join(__dirname, "./layouts");

app.set("view engine", "hbs"); 
app.set("views", viewsDir); 
hbs.registerPartials(layoutsDir); 
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});

module.exports = app;
