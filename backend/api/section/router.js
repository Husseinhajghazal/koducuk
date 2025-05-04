const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate, checkAdmin } = require("../../middleware/authenticate");

const router = express.Router();

router.get("/", authenticate, checkAdmin, controller.getSectionsController);

router.get("/active", authenticate, controller.getActiveSections);

router.get(
  "/toggle/:id",
  authenticate,
  validation.toggleActive,
  controller.toggleActive
);

router.get("/:id", authenticate, controller.getSectionController);

router.post(
  "/create",
  validation.createSection,
  controller.createSectionController
);

router.put(
  "/:id",
  authenticate,
  validation.updateSection,
  controller.updateSectionController
);

router.delete("/:id", authenticate, controller.deleteSectionController);

module.exports = router;
