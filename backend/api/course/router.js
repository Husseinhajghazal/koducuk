const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

// router.get("/", authenticate, checkAdmin, controller.getCoursesController);

// router.get("/active", authenticate, controller.getActiveCourses);

// router.get("/:id", authenticate, controller.getCourseController);

// router.post("/create", validation.createCourse, controller.createCourse);

// router.put(
//   "/:id",
//   authenticate,
//   validation.updateCourse,
//   controller.updateCourse
// );

// router.delete("/:id", authenticate, controller.deleteCourse);

module.exports = router;
