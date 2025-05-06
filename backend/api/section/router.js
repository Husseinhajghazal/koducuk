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
  checkAdmin,
  validation.toggleActive,
  controller.toggleActive
);

router.get(
  "/:id",
  authenticate,
  validation.getSection,
  controller.getSectionController
);

router.post(
  "/",
  authenticate,
  checkAdmin,
  validation.createSection,
  controller.createSectionController
);

router.put(
  "/:id",
  authenticate,
  checkAdmin,
  validation.updateSection,
  controller.updateSectionController
);

router.delete(
  "/:id",
  authenticate,
  checkAdmin,
  validation.deleteSection,
  controller.deleteSectionController
);

module.exports = router;
