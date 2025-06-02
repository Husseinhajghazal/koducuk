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

async function getUniqueLesson(id) {
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

async function getLesson(key, value) {
  let lesson;

  try {
    lesson = await prisma.lesson.findFirst({ where: { [key]: value } });
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

async function getLessons(where) {
  try {
    return await prisma.lesson.findMany({
      ...(where && { where }),
      orderBy: { index: "asc" },
      include: {
        questions: true,
      },
    });
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

async function checkNoLesson(index, section_id, id) {
  let lesson;

  try {
    lesson = await prisma.lesson.findFirst({
      where: { section_id, index, ...(id && { NOT: { id } }) },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting lesson.", 500);
  }

  if (lesson) {
    throw new ApiError("İki ders aynı index'e ait olamaz.", 400);
  }
}

module.exports = {
  createLesson,
  updateLesson,
  getLesson,
  getLessons,
  deleteLesson,
  getUniqueLesson,
  checkNoLesson,
};
