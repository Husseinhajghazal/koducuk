const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getPlansController);

router.get("/active", controller.getActivePlans);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", authenticate, controller.getPlanController);

router.post("/create", validation.createPlan, controller.createPlanController);

router.put(
  "/:id",
  authenticate,
  validation.updatePlan,
  controller.updatePlanController
);

router.delete(
  "/:id",
  authenticate,
  validation.deletePlan,
  controller.deletePlanController
);

module.exports = router;
