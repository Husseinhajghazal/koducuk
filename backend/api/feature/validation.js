const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createFeature = [
  body("value")
    .exists()
    .withMessage("Value is required")
    .isString()
    .withMessage("Value must be a string"),
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

const updateFeature = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  body("value")
    .exists()
    .withMessage("Value is required")
    .isString()
    .withMessage("Value must be a string"),
  validator,
];

const deleteFeature = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const getFeature = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

module.exports = {
  deleteFeature,
  getFeature,
  createFeature,
  toggleActive,
  updateFeature,
};
