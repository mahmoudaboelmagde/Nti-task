const express = require("express");
const app = express();
require("dotenv").config();
const hbs = require("hbs");
const path = require("path");
const userRouter = require("../routes/route.usre");

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../rescorses/public")));
app.set("views", path.join(__dirname, "../rescorses/views"));
hbs.registerPartials(path.join(__dirname, "../rescorses/layout"));
// app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.get("*", (req, res) => res.render("error404", { pageTitle: "Not found" }));
app.post("*", (req, res) => res.render("error404", { pageTitle: "Not found" }));

module.exports = app;
