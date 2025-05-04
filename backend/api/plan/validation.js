const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createPlan = [validator];

const toggleActive = [validator];

const updatePlan = [validator];

module.exports = { createPlan, toggleActive, updatePlan };
