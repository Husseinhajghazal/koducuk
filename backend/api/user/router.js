const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const authenticate = require("../../middleware/authentication");

const router = express.Router();


router.get("/", authenticate, controller.getAllUsers);
router.get("/:id", authenticate, controller.getUserById);
router.post("/create", validation.createUser, controller.createUser);
router.put("/:id", authenticate, validation.updateUser, controller.updateUser);
router.delete("/:id", authenticate, controller.deleteUser);
router.post("/signup", validation.signup, controller.signup);
router.get("/activate/:token", validation.activate, controller.activateAccount);

module.exports = router;
