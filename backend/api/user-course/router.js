const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get(
  "/users/:course_id",
  authenticate,
  validation.getUsersCourse,
  controller.getUsersCourse
);

router.get(
  "/is-subscribed/:course_id",
  authenticate,
  validation.isSubscribed,
  controller.isSubscribed
);

router.get(
  "/:id",
  authenticate,
  validation.getUserCourse,
  controller.getUserCourse
);

router.post(
  "/",
  authenticate,
  validation.createUserCourse,
  controller.createUserCourseController
);

router.put(
  "/:id",
  authenticate,
  validation.updateUserCourse,
  controller.updateUserCourseController
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  validation.deleteUserCourse,
  controller.deleteUserCourseController
);

module.exports = router;
