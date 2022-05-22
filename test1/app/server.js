const exprees = require("express");
const app = exprees();
require("dotenv").config();
const path = require("path");

const userRouter = require("../routes/user.routes");
const postRouter = require("../routes/post.routes");
app.use(exprees.static(path.join(__dirname, "../public")));
app.use(exprees.urlencoded({ extended: true }));
app.use(exprees.json());
app.use("/user", userRouter);
app.use("/post", postRouter);
app.all("*", (req, res) => {
  res.status(404).send({ error: "invalid url segment", apiStatus: false });
});

module.exports = app;
