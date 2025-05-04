const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const getPlan = [
  query("id").trim().notEmpty().withMessage("Price is required"),
  validator,
];

const deletePlan = [
  query("id").trim().notEmpty().withMessage("Price is required"),
  validator,
];

const createPlan = [
  body("price")
    .exists()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("discounted_price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Discounted price must be a number greater than 0")
    .custom((value, { req }) => {
      if (value >= req.body.price) {
        throw new Error(
          "Discounted price must be less than the original price"
        );
      }
      return true;
    }),
  body("duration").exists().withMessage("Duration is required"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string")
    .isLength({ max: 500 })
    .withMessage("Description must be less than 500 characters"),
  validator,
];

const toggleActive = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const updatePlan = [
  query("id").trim().notEmpty().withMessage("id is required"),
  body("price")
    .exists()
    .withMessage("Price is required")
    .isFloat({ gt: 0 })
    .withMessage("Price must be a number greater than 0"),
  body("discounted_price")
    .optional()
    .isFloat({ gt: 0 })
    .withMessage("Discounted price must be a number greater than 0")
    .custom((value, { req }) => {
      if (value >= req.body.price) {
        throw new Error(
          "Discounted price must be less than the original price"
        );
      }
      return true;
    }),
  body("unit")
    .exists()
    .withMessage("Unit is required")
    .isIn(["day", "week", "month", "year"])
    .withMessage("Unit must be one of: day, week, month, year"),
  body("duration")
    .exists()
    .withMessage("Duration is required")
    .isInt({ gt: 0 })
    .withMessage("Duration must be a positive integer"),
  body("description")
    .optional()
    .isString()
    .withMessage("Description must be a string")
    .isLength({ max: 500 })
    .withMessage("Description must be less than 500 characters"),
  validator,
];

module.exports = { createPlan, toggleActive, updatePlan, deletePlan, getPlan };
