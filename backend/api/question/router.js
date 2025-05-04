const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, controller.getQuestionsController);

router.get("/active", authenticate, controller.getActiveQuestions);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", authenticate, controller.getQuestionController);

router.post(
  "/create",
  validation.createQuestion,
  controller.createQuestionController
);

router.put(
  "/:id",
  authenticate,
  validation.updateQuestion,
  controller.updateQuestionController
);

router.delete("/:id", authenticate, controller.deleteQuestionController);

module.exports = router;
