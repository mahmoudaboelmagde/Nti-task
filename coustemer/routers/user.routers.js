const router = require("express").Router();
const userControlers = require("../app/controlers/user.controlers");
router.get("/", userControlers.home);

// add user
router.get("/addCoustmer", userControlers.addCoustmer);
router.post("/addCoustmer", userControlers.addCoustmerLogic);

//show userData
router.get("/User/:accName", userControlers.showUserData);

//delete user
router.get("/user/del/:accName", userControlers.delUser);

//update data
router.get("/users/edite/:accName", userControlers.editeUser);
router.post("/users/edite/:accName", userControlers.editeUserLogic);

module.exports = router;
