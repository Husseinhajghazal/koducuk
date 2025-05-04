const { createPlan, deletePlan, getPlans, updatePlan } = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getPlansController(req, res) {}

async function getActivePlans(req, res) {}

async function toggleActive(req, res) {}

async function getPlanController(req, res) {}

async function createPlanController(req, res) {}

async function updatePlanController(req, res) {}

async function deletePlanController(req, res) {}

module.exports = {
  getPlansController,
  getActivePlans,
  toggleActive,
  getPlanController,
  updatePlanController,
  createPlanController,
  deletePlanController,
};
