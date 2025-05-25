const { body, param } = require("express-validator");
const { validator } = require("../../middleware/validator");

const getPlan = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const deletePlan = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
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
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const updatePlan = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
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

module.exports = { createPlan, toggleActive, updatePlan, deletePlan, getPlan };
