require("../database/bankDB");
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const userRouter = require("../routers/user.router");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));
hbs.registerPartials(path.join(__dirname, "../layout"));
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.get("*", (req, res) =>
  res.render("err404", { pageTitle: "Not found", errMassge: "invalid url" })
);
app.post("*", (req, res) =>
  res.render("err404", { pageTitle: "Not found", errMassge: "invalid url" })
);
module.exports = app;
