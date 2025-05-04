const {
  createFeature,
  deleteFeature,
  getFeatures,
  updateFeature,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getFeaturesController(req, res) {}

async function getActiveFeatures(req, res) {}

async function toggleActive(req, res) {}

async function getFeatureController(req, res) {}

async function createFeatureController(req, res) {}

async function updateFeatureController(req, res) {}

async function deleteFeatureController(req, res) {}

module.exports = {
  getFeaturesController,
  getActiveFeatures,
  toggleActive,
  getFeatureController,
  createFeatureController,
  updateFeatureController,
  deleteFeatureController,
};
