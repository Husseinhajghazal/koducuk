const {
  createLesson,
  deleteLesson,
  getLessons,
  updateLesson,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getLessonsController(req, res) {}

async function getActiveLessons(req, res) {}

async function toggleActive(req, res) {}

async function getLessonController(req, res) {}

async function createLessonController(req, res) {}

async function updateLessonController(req, res) {}

async function deleteLessonController(req, res) {}

module.exports = {
  getLessonsController,
  getActiveLessons,
  toggleActive,
  getLessonController,
  createLessonController,
  updateLessonController,
  deleteLessonController,
};
