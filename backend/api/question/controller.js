const {
  createQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getQuestionsController(req, res) {}

async function getActiveQuestions(req, res) {}

async function toggleActive(req, res) {}

async function getQuestionController(req, res) {}

async function createQuestionController(req, res) {}

async function updateQuestionController(req, res) {}

async function deleteQuestionController(req, res) {}

module.exports = {
  getQuestionsController,
  getActiveQuestions,
  toggleActive,
  getQuestionController,
  createQuestionController,
  updateQuestionController,
  deleteQuestionController,
};
