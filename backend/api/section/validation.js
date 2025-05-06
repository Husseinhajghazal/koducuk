const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createSection = [
  body("name")
    .exists()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("course_id")
    .exists()
    .withMessage("Course ID is required")
    .isMongoId()
    .withMessage("Course ID must be a valid MongoDB ObjectId"),
  validator,
];

const toggleActive = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const getSection = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const deleteSection = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const updateSection = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  body("name")
    .exists()
    .withMessage("name is required")
    .isString()
    .withMessage("name must be a string"),
  body("course_id")
    .exists()
    .withMessage("Course ID is required")
    .isMongoId()
    .withMessage("Course ID must be a valid MongoDB ObjectId"),
  validator,
];

module.exports = {
  getSection,
  deleteSection,
  createSection,
  toggleActive,
  updateSection,
};
