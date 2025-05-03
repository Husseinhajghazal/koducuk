const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate } = require("../../middleware/authenticate");

const router = express.Router();

// router.get("/", authenticate, controller.getAllCourses);
// router.get("/:id", authenticate, controller.getCourseById);
// router.post("/create", validation.createCourse, controller.createCourse);
// router.put(
//   "/:id",
//   authenticate,
//   validation.updateCourse,
//   controller.updateCourse
// );
// router.delete("/:id", authenticate, controller.deleteCourse);

module.exports = router;
