const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(data) {
  return await prisma.user.create({ data });
}

async function updateUser(id, data) {
  return await prisma.user.update({ data, where: { id } });
}

async function getUsers(id) {
  if (id) {
    return await prisma.user.findUnique({ where: { id } });
  } else {
    return await prisma.user.findMany();
  }
}

async function deleteUser(id) {
  return await prisma.user.delete({ where: { id } });
}

module.exports = { createUser, updateUser, getUsers, deleteUser };
