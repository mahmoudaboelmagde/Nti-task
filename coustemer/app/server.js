require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "../piblic")));
hbs.registerPartials(path.join(__dirname, "../rescourse/layout"));
app.set("views", path.join(__dirname, "../rescourse/views"));
const userRouter = require("../routers/user.routers");
app.use(express.urlencoded({extended:true}))
app.use(userRouter);
module.exports = app;
