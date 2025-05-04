const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createQuestion(data) {
  try {
    return await prisma.question.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating question.", 500);
  }
}

async function updateQuestion(id, data) {
  try {
    return await prisma.question.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating question.", 500);
  }
}

async function getQuestion(key, value) {
  let question;

  try {
    question = await prisma.question.findUnique({ where: { [key]: value } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting question.", 500);
  }

  if (question) {
    return question;
  } else {
    throw new ApiError("Question not found.", 404);
  }
}

async function getUniqueQuestion(id) {
  let question;

  try {
    question = await prisma.question.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting question.", 500);
  }

  if (question) {
    return question;
  } else {
    throw new ApiError("Question not found.", 404);
  }
}

async function getQuestions(where) {
  try {
    return await prisma.question.findMany(where && { where });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting questions.", 500);
  }
}

async function deleteQuestion(id) {
  try {
    return await prisma.question.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting question.", 500);
  }
}

module.exports = {
  createQuestion,
  updateQuestion,
  getQuestion,
  getQuestions,
  deleteQuestion,
  getUniqueQuestion,
};
