const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate } = require("../../middleware/authenticate");

const router = express.Router();

// added code can be wrong
// router.get("/", authenticate, controller.getAllUserCourses);
// router.get("/:id", authenticate, controller.getUserCourseById);
// router.post(
//   "/create",
//   validation.createUserCourse,
//   controller.createUserCourse
// );
// router.put(
//   "/:id",
//   authenticate,
//   validation.updateUserCourse,
//   controller.updateUserCourse
// );
// router.delete("/:id", authenticate, controller.deleteUserCourse);

module.exports = router;
