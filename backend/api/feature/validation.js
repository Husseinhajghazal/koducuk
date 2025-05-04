const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createFeature = [validator];

module.exports = { createFeature };
