const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createQuestion = [validator];

const toggleActive = [validator];

const updateQuestion = [validator];

module.exports = { createQuestion, toggleActive, updateQuestion };
