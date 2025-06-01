const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

const getUsersCourse = [
  param("course_id")
    .trim()
    .notEmpty()
    .withMessage("course id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const isSubscribed = [
  param("course_id")
    .trim()
    .notEmpty()
    .withMessage("course id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const getUserCourse = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const deleteUserCourse = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const createUserCourse = [
  body("course_id")
    .trim()
    .notEmpty()
    .withMessage("course id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const updateUserCourse = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  body("course_id")
    .trim()
    .notEmpty()
    .withMessage("course id gereklidir.")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  body("score")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("score must be a positive integer"),
  body("reached_Lesson")
    .optional()
    .isInt({ gt: -1 })
    .withMessage("reached Lesson must be a positive integer"),
  validator,
];

module.exports = {
  getUsersCourse,
  getUserCourse,
  deleteUserCourse,
  createUserCourse,
  updateUserCourse,
  isSubscribed,
};
