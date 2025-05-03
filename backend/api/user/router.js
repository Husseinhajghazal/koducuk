const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authentication");

const router = express.Router();

router.post("/login", validation.login, controller.login);

router.post(
  "/email",
  authenticate,
  validation.updateEmailRequest,
  controller.updateEmailRequest
);

router.post(
  "/forget_password",
  validation.forgetPassword,
  controller.forgetPassword
);

router.put("/", authenticate, validation.updateInfo, controller.updateInfo);

router.put(
  "/password",
  authenticate,
  validation.updatePassword,
  controller.updatePassword
);

router.put("/email/:token", validation.updateEmail, controller.updateEmail);

router.get(
  "/activate/:token",
  validation.activateAccount,
  controller.activateAccount
);

router.put(
  "/forget_password/:token",
  validation.updatePasswordByToken,
  controller.updatePasswordByToken
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  validation.deleteUser,
  controller.deleteUserController
);

router.get("/", authenticate, checkAdmin, controller.getUsersController);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get(
  "/:id",
  authenticate,
  validation.getUser,
  controller.getUserController
);

module.exports = router;
