const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate } = require("../../middleware/authenticate");

const router = express.Router();

// added code can be wrong
// router.get("/", authenticate, controller.getAllPlans);
// router.get("/:id", authenticate, controller.getPlanById);
// router.post("/create", validation.createPlan, controller.createPlan);
// router.put("/:id", authenticate, validation.updatePlan, controller.updatePlan);
// router.delete("/:id", authenticate, controller.deletePlan);

module.exports = router;
