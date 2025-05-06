const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createQuestion = [
  body("value")
    .exists()
    .withMessage("Value is required")
    .isString()
    .withMessage("Value must be a string"),
  body("choices")
    .exists()
    .withMessage("Choices are required")
    .isArray({ min: 2 })
    .withMessage("Choices must be a non-empty array")
    .custom((arr) => {
      if (!arr.every((choice) => typeof choice === "string")) {
        throw new Error("All choices must be strings");
      }
      return true;
    }),
  body("lesson_id")
    .exists()
    .withMessage("Lesson ID is required")
    .isMongoId()
    .withMessage("Lesson ID must be a valid MongoDB ObjectId"),
  validator,
];

const deleteQuestion = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const getQuestion = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const toggleActive = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const updateQuestion = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  body("value")
    .exists()
    .withMessage("Value is required")
    .isString()
    .withMessage("Value must be a string"),
  body("choices")
    .exists()
    .withMessage("Choices are required")
    .isArray({ min: 2 })
    .withMessage("Choices must be a non-empty array")
    .custom((arr) => {
      if (!arr.every((choice) => typeof choice === "string")) {
        throw new Error("All choices must be strings");
      }
      return true;
    }),
  body("lesson_id")
    .exists()
    .withMessage("Lesson ID is required")
    .isMongoId()
    .withMessage("Lesson ID must be a valid MongoDB ObjectId"),
  validator,
];

module.exports = {
  deleteQuestion,
  createQuestion,
  toggleActive,
  updateQuestion,
  getQuestion,
};
