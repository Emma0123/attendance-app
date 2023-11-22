const router = require("express").Router()
const { usersController } = require("../controller");
const { validateToken } = require("../middleware/validation");
router.post("/login", usersController.loginAcc);
router.post("/register", usersController.register)
router.get("/keeplogin", validateToken, usersController.keepLogin)


module.exports = router