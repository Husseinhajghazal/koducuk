const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const toggleActive = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const createCourse = [
  body("name").trim().notEmpty().withMessage("Ad gereklidir."),
  body("image_url").trim().notEmpty().withMessage("image url gereklidir."),
  validator,
];

const updateCourse = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  body("name").trim().notEmpty().withMessage("Ad gereklidir."),
  body("image_url").trim().notEmpty().withMessage("image url gereklidir."),
  validator,
];

const getCourse = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const deleteCourse = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

module.exports = {
  getCourse,
  deleteCourse,
  toggleActive,
  createCourse,
  updateCourse,
};
