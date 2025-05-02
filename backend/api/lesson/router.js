const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const authenticate = require("../../middleware/authentication");

const router = express.Router();

// added code can be wrong
router.get("/", authenticate, controller.getAllLessons);
router.get("/:id", authenticate, controller.getLessonById);
router.post("/create", validation.createLesson, controller.createLesson);
router.put(
  "/:id",
  authenticate,
  validation.updateLesson,
  controller.updateLesson
);
router.delete("/:id", authenticate, controller.deleteLesson);

module.exports = router;
