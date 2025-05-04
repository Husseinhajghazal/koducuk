const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createLesson = [validator];

const updateLesson = [validator];

const toggleActive = [validator];

module.exports = { createLesson, updateLesson, toggleActive };
