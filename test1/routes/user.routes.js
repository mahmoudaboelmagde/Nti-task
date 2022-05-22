const userControl = require("../app/controler/user.controlers")
const router = require("express").Router()

router.post("/register",userControl.addEmail)
module.exports= router
