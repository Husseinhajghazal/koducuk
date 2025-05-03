const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate } = require("../../middleware/authenticate");

const router = express.Router();

// added code can be wrong
// router.get("/", authenticate, controller.getAllFeatures);
// router.get("/:id", authenticate, controller.getFeatureById);
// router.post("/create", validation.createFeature, controller.createFeature);
// router.put(
//   "/:id",
//   authenticate,
//   validation.updateFeature,
//   controller.updateFeature
// );
// router.delete("/:id", authenticate, controller.deleteFeature);

module.exports = router;
