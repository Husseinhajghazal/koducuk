const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUserCourse(data) {
  try {
    return await prisma.userCourse.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating userCourse.", 500);
  }
}

async function updateUserCourse(id, data) {
  try {
    return await prisma.userCourse.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating userCourse.", 500);
  }
}

async function getUniqueUserCourse(id) {
  let userCourse;

  try {
    userCourse = await prisma.userCourse.findUnique({
      where: { id },
      include: { course: true, user: true },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting userCourse.", 500);
  }

  if (userCourse) {
    return userCourse;
  } else {
    throw new ApiError("UserCourse not found.", 404);
  }
}

async function getUserCourse(key, value) {
  let userCourse;

  try {
    userCourse = await prisma.userCourse.findFirst({
      where: { [key]: value },
      include: { course: true, user: true },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting userCourse.", 500);
  }

  if (!userCourse) {
    throw new ApiError("UserCourse not found.", 404);
  }

  return userCourse;
}

async function getUsersCourses(where) {
  try {
    return await prisma.userCourse.findMany({
      include: { course: true, user: true },
      orderBy: { score: "desc" },
      ...(where && { where }),
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting userCourses.", 500);
  }
}

async function deleteUserCourse(id) {
  try {
    return await prisma.userCourse.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting userCourse.", 500);
  }
}

module.exports = {
  createUserCourse,
  updateUserCourse,
  getUserCourse,
  deleteUserCourse,
  getUniqueUserCourse,
  getUsersCourses,
};
