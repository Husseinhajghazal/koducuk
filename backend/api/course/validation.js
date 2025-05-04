const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const toggleActive = [validator];

const createCourse = [validator];

const updateCourse = [validator];

module.exports = { toggleActive, createCourse, updateCourse };
