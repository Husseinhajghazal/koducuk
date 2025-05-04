const {
  createQuestion,
  deleteQuestion,
  getQuestions,
  updateQuestion,
  getUniqueQuestion,
} = require("./service");
const { getUniqueLesson } = require("../lesson/service");
const successResponse = require("../../utils/success-respnse");

async function getQuestionsController(req, res) {
  const questions = await getQuestions();

  successResponse(res, "Sorular Başarı ile çekildi.", questions);
}

async function getActiveQuestions(req, res) {
  const questions = await getQuestions({ active: true });

  successResponse(res, "Sorular Başarı ile çekildi.", questions);
}

async function toggleActive(req, res) {
  const id = req.params.id;

  let question = await getUniqueQuestion(id);

  question = await updateQuestion(id, { active: !question.active });

  successResponse(res, "Durum başarı ile güncellendi.", [question]);
}

async function getQuestionController(req, res) {
  const question = await getUniqueQuestion(req.params.id);

  successResponse(res, "Soru başarı ile çekildi.", [question]);
}

async function createQuestionController(req, res) {
  const { value, choices, lesson_id } = req.body;

  await getUniqueLesson(lesson_id);

  const question = await createQuestion({
    value,
    choices,
    lesson_id,
  });

  successResponse(res, "Soru Başarı ile oluşturuldu.", [question]);
}

async function updateQuestionController(req, res) {
  const { value, choices, lesson_id } = req.body;

  const id = req.params.id;

  await getUniqueLesson(lesson_id);

  await getUniqueQuestion(id);

  let question = await updateQuestion(id, {
    value,
    choices,
    lesson_id,
  });

  successResponse(res, "Soru başarı ile güncellendi.", [question]);
}

async function deleteQuestionController(req, res) {
  const id = req.params.id;

  const question = await getUniqueQuestion(id);

  await deleteQuestion(id);

  successResponse(res, "Soru başarı ile silindi.", [question]);
}

module.exports = {
  getQuestionsController,
  getActiveQuestions,
  toggleActive,
  getQuestionController,
  createQuestionController,
  updateQuestionController,
  deleteQuestionController,
};
