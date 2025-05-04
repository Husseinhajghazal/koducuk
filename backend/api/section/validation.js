const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createSection = [validator];

const toggleActive = [validator];

const updateSection = [validator];

module.exports = { createSection, toggleActive, updateSection };
