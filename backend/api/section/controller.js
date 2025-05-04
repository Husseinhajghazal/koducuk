const {
  createSection,
  deleteSection,
  getSections,
  updateSection,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getSectionsController(req, res) {}

async function getActiveSections(req, res) {}

async function toggleActive(req, res) {}

async function getSectionController(req, res) {}

async function createSectionController(req, res) {}

async function updateSectionController(req, res) {}

async function deleteSectionController(req, res) {}

module.exports = {
  getSectionsController,
  getActiveSections,
  toggleActive,
  getSectionController,
  createSectionController,
  updateSectionController,
  deleteSectionController,
};
