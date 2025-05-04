const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getFeaturesController);

router.get("/active", authenticate, controller.getActiveFeatures);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", authenticate, controller.getFeatureController);

router.post(
  "/create",
  validation.createFeature,
  controller.createFeatureController
);

router.put(
  "/:id",
  authenticate,
  validation.updateFeature,
  controller.updateFeatureController
);

router.delete("/:id", authenticate, controller.deleteFeatureController);

module.exports = router;
