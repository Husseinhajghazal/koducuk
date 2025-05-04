const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createFeature = [validator];

const toggleActive = [validator];

const updateFeature = [validator];

module.exports = { createFeature, toggleActive, updateFeature };
