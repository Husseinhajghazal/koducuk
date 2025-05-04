const {
  createPlan,
  deletePlan,
  getPlans,
  updatePlan,
  getUniquePlan,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getPlansController(req, res) {
  const plans = await getPlans();

  successResponse(res, "Planlar Başarı ile çekildi.", plans);
}

async function getActivePlans(req, res) {
  const plans = await getPlans({ active: true });

  successResponse(res, "Planlar Başarı ile çekildi.", plans);
}

async function toggleActive(req, res) {
  const id = req.params.id;

  let plan = await getUniquePlan(id);

  plan = await updatePlan(id, { active: !plan.active });

  successResponse(res, "Durum başarı ile güncellendi.", [plan]);
}

async function getPlanController(req, res) {
  const plan = await getUniquePlan(req.params.id);

  successResponse(res, "Plan başarı ile çekildi.", [plan]);
}

async function createPlanController(req, res) {
  const { price, discounted_price, duration, description } = req.body;

  const plan = await createPlan({
    price,
    discounted_price,
    duration,
    description,
  });

  successResponse(res, "Plan Başarı ile oluşturuldu.", [plan]);
}

async function updatePlanController(req, res) {
  const { price, discounted_price, duration, description } = req.body;
  const id = req.params.id;

  await getUniquePlan(id);

  let plan = await updatePlan(id, {
    price,
    discounted_price,
    duration,
    description,
  });

  successResponse(res, "Plan başarı ile güncellendi.", [plan]);
}

async function deletePlanController(req, res) {
  const id = req.params.id;

  const plan = await getUniquePlan(id);

  await deletePlan(id);

  successResponse(res, "Plan başarı ile silindi.", [plan]);
}

module.exports = {
  getPlansController,
  getActivePlans,
  toggleActive,
  getPlanController,
  updatePlanController,
  createPlanController,
  deletePlanController,
};
