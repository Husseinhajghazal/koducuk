const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createCourse(data) {
  try {
    return await prisma.course.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating course.", 500);
  }
}

async function updateCourse(id, data) {
  try {
    return await prisma.course.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating course.", 500);
  }
}

async function getUniqueCourse(id) {
  let course;

  try {
    course = await prisma.course.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting course.", 500);
  }

  if (course) {
    return course;
  } else {
    throw new ApiError("Course not found.", 404);
  }
}

async function getCourse(key, value) {
  let course;

  try {
    course = await prisma.course.findFirst({ where: { [key]: value } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting course.", 500);
  }

  if (course) {
    return course;
  } else {
    throw new ApiError("Course not found.", 404);
  }
}

async function getCourses() {
  try {
    return await prisma.course.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting courses.", 500);
  }
}

async function deleteCourse(id) {
  try {
    return await prisma.course.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting course.", 500);
  }
}

module.exports = {
  createCourse,
  updateCourse,
  getCourse,
  getCourses,
  deleteCourse,
};
