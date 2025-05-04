const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createPlan(data) {
  try {
    return await prisma.plan.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating plan.", 500);
  }
}

async function updatePlan(id, data) {
  try {
    return await prisma.plan.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating plan.", 500);
  }
}

async function getUniquePlan(id) {
  let plan;

  try {
    plan = await prisma.plan.findUnique({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting plan.", 500);
  }

  if (plan) {
    return plan;
  } else {
    throw new ApiError("Plan not found.", 404);
  }
}

async function getPlan(key, value) {
  let plan;

  try {
    plan = await prisma.plan.findFirst({ where: { [key]: value } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting plan.", 500);
  }

  if (plan) {
    return plan;
  } else {
    throw new ApiError("Plan not found.", 404);
  }
}

async function getPlans(where) {
  try {
    return await prisma.plan.findMany(where && { where });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting plans.", 500);
  }
}

async function deletePlan(id) {
  try {
    return await prisma.plan.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting plan.", 500);
  }
}

module.exports = {
  createPlan,
  updatePlan,
  getPlan,
  getPlans,
  deletePlan,
  getUniquePlan,
};
