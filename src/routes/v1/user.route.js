const router = require("express").Router();

const { UserController } = require("../../controller");

router.post("/", UserController.createUser);

router.post("/signin", UserController.signIn);

router.post("/authenticate", UserController.authenticate);

router.get("/", UserController.getAllUser);

router.get("/:id", UserController.getUser);

router.put("/:id", UserController.updateUser);

router.delete("/:id", UserController.deleteUser);

module.exports = router;
