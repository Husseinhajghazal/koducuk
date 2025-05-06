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

router.get(
  "/:id",
  authenticate,
  validation.getLesson,
  controller.getLessonController
);

router.post(
  "/",
  authenticate,
  checkAdmin,
  validation.createLesson,
  controller.createLessonController
);

router.put(
  "/:id",
  authenticate,
  checkAdmin,
  validation.updateLesson,
  controller.updateLessonController
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  validation.deleteLesson,
  controller.deleteLessonController
);

module.exports = router;
