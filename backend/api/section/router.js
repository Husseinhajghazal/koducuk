const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const { authenticate } = require("../../middleware/authenticate");

const router = express.Router();

 
 router.get("/", authenticate, controller.getAllSections);
 router.get("/:id", authenticate, controller.getSectionById);
 router.post("/create", validation.createSection, controller.createSection);
 router.put("/:id",authenticate,validation.updateSection,controller.updateSection);
 router.delete("/:id", authenticate, controller.deleteSection);

module.exports = router;
