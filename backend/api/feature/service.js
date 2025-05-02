const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createFeature(data) {
  try {
    return await prisma.feature.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating feature.", 500);
  }
}

async function updateFeature(id, data) {
  try {
    return await prisma.feature.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating feature.", 500);
  }
}

async function getFeature(id) {
  let feature;

  try {
    feature = await prisma.feature.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting feature.", 500);
  }

  if (feature) {
    return feature;
  } else {
    throw new ApiError("Feature not found.", 404);
  }
}

async function getFeatures() {
  try {
    return await prisma.feature.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting features.", 500);
  }
}

async function deleteFeature(id) {
  try {
    return await prisma.feature.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting feature.", 500);
  }
}

module.exports = { createFeature, updateFeature, getFeature, getFeatures, deleteFeature };
