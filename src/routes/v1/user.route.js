const router = require("express").Router();

const { UserController } = require("../../controller");

router.post("/signup", UserController.createUser);

router.post("/signin", UserController.signIn);

router.get("/", UserController.getAllUser);

router.get("/:id", UserController.getUser);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
