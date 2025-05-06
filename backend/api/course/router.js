const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getCoursesController);

router.get("/active", authenticate, controller.getActiveCourses);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", authenticate, controller.getCourseController);

router.post(
  "/",
  authenticate,
  checkAdmin,
  validation.createCourse,
  controller.createCourseController
);

router.put(
  "/:id",
  authenticate,
  checkAdmin,
  validation.updateCourse,
  controller.updateCourseController
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  controller.deleteCourseController
);

module.exports = router;
