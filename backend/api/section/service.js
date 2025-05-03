const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createSection(data) {
  try {
    return await prisma.section.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating section.", 500);
  }
}

async function updateSection(id, data) {
  try {
    return await prisma.section.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating section.", 500);
  }
}

async function getSection(id) {
  let section;

  try {
    section = await prisma.section.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting section.", 500);
  }

  if (section) {
    return section;
  } else {
    throw new ApiError("Section not found.", 404);
  }
}

async function getSections() {
  try {
    return await prisma.section.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting sections.", 500);
  }
}

async function deleteSection(id) {
  try {
    return await prisma.section.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting section.", 500);
  }
}

module.exports = {
  createSection,
  updateSection,
  getSection,
  getSections,
  deleteSection,
};
