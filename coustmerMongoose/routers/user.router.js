const router = require("express").Router();
const userControl = require("../app/controlers/user.controler");
router.get("/", userControl.showAll);
router.get("/add", userControl.add);
router.post("/add", userControl.addLogic);
router.get("/edit/:id", userControl.edit);
router.post("/edit/:id", userControl.editLogic);
router.get("/singl/:id", userControl.singl);
router.get("/delete/:id", userControl.delete);
router.get("/tran/:id", userControl.tran);

module.exports = router;
