const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(data) {
  try {
    return await prisma.user.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating user.", 400);
  }
}

async function updateUser(id, data) {
  try {
    return await prisma.user.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating user.", 400);
  }
}

async function getUser(id) {
  let user;

  try {
    user = await prisma.user.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 400);
  }

  if (user) {
    return user;
  } else {
    throw new ApiError("User not found.", 404);
  }
}

async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting users.", 400);
  }
}

async function deleteUser(id) {
  try {
    return await prisma.user.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting user.", 400);
  }
}

module.exports = { createUser, updateUser, getUser, getUsers, deleteUser };
