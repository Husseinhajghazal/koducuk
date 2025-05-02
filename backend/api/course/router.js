const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const authenticate = require("../../middleware/authentication");

const router = express.Router();

// added code can be wrong
router.get("/", authenticate, controller.getAllCourses);
router.get("/:id", authenticate, controller.getCourseById);
router.post("/create", validation.createCourse, controller.createCourse);
router.put(
  "/:id",
  authenticate,
  validation.updateCourse,
  controller.updateCourse
);
router.delete("/:id", authenticate, controller.deleteCourse);

module.exports = router;
