const {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getCoursesController(req, res) {}

async function toggleActive(req, res) {}

async function getActiveCourses(req, res) {}

async function getCourseController(req, res) {}

async function createCourseController(req, res) {}

async function updateCourseController(req, res) {}

async function deleteCourseController(req, res) {}

module.exports = {
  getCoursesController,
  toggleActive,
  getActiveCourses,
  getCourseController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
};
