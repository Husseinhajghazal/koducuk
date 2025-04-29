const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(data) {
  try {
    return await prisma.user.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating user.", 500);
  }
}

async function updateUser(id, data) {
  try {
    return await prisma.user.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating user.", 500);
  }
}

async function getUser(id) {
  let user;

  try {
    user = await prisma.user.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 500);
  }

  if (!user) {
    throw new ApiError("User not found.", 404);
  }

  return user;
}

async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting users.", 500);
  }
}

async function deleteUser(id) {
  try {
    return await prisma.user.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting users.", 500);
  }
}

module.exports = { createUser, updateUser, getUsers, deleteUser, checkNoUser };
