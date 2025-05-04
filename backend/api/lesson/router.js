const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getLessonsController);

router.get("/active", authenticate, controller.getActiveLessons);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", authenticate, controller.getLessonController);

router.post(
  "/create",
  validation.createLesson,
  controller.createLessonController
);

router.put(
  "/:id",
  authenticate,
  validation.updateLesson,
  controller.updateLessonController
);

router.delete("/:id", authenticate, controller.deleteLessonController);

module.exports = router;
