const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getFeaturesController);

router.get("/active", controller.getActiveFeatures);

router.get(
  "/toggle/:id",
  authenticate,
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", validation.getFeature, controller.getFeatureController);

router.post(
  "/",
  authenticate,
  checkAdmin,
  validation.createFeature,
  controller.createFeatureController
);

router.put(
  "/:id",
  authenticate,
  checkAdmin,
  validation.updateFeature,
  controller.updateFeatureController
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  validation.deleteFeature,
  controller.deleteFeatureController
);

module.exports = router;
