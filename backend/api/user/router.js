const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const authenticate = require("../../middleware/authentication");

const router = express.Router();

router.post("/signup", validation.signup, controller.signup);

router.get("/activate/:token", validation.activate, controller.activateAccount);

module.exports = router;
