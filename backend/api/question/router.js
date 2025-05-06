const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getQuestionsController);

router.get("/active", authenticate, controller.getActiveQuestions);

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
  validation.getQuestion,
  controller.getQuestionController
);

router.post(
  "/",
  authenticate,
  checkAdmin,
  validation.createQuestion,
  controller.createQuestionController
);

router.put(
  "/:id",
  authenticate,
  checkAdmin,
  validation.updateQuestion,
  controller.updateQuestionController
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  validation.deleteQuestion,
  controller.deleteQuestionController
);

module.exports = router;
