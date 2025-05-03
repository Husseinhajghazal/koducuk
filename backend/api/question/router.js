const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate } = require("../../middleware/authenticate");

const router = express.Router();

// added code can be wrong
// router.get("/", authenticate, controller.getAllCs);
// router.get("/:id", authenticate, controller.getQuestionById);
// router.post("/create", validation.createQuestion, controller.createQuestion);
// router.put(
//   "/:id",
//   authenticate,
//   validation.updateQuestion,
//   controller.updateQuestion
// );
// router.delete("/:id", authenticate, controller.deleteQuestion);

module.exports = router;
