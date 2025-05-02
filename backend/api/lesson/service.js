const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createLesson(data) {
  try {
    return await prisma.lesson.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating lesson.", 500);
  }
}

async function updateLesson(id, data) {
  try {
    return await prisma.lesson.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating lesson.", 500);
  }
}

async function getLesson(id) {
  let lesson;

  try {
    lesson = await prisma.lesson.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting lesson.", 500);
  }

  if (lesson) {
    return lesson;
  } else {
    throw new ApiError("Lesson not found.", 404);
  }
}

async function getLessons() {
  try {
    return await prisma.lesson.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting lessons.", 500);
  }
}

async function deleteLesson(id) {
  try {
    return await prisma.lesson.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting lesson.", 500);
  }
}

module.exports = {
  createLesson,
  updateLesson,
  getLesson,
  getLessons,
  deleteLesson,
};
