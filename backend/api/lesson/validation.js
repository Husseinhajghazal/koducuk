const { body, param } = require("express-validator");
const { validator } = require("../../middleware/validator");

const createLesson = [
  body("index")
    .exists()
    .withMessage("sırası gereklidir.")
    .isInt({ gt: -1 })
    .withMessage("Dersin sırası pozitif numara olmalı "),
  body("name").trim().notEmpty().withMessage("ad gereklidir."),
  body("video_url").trim().notEmpty().withMessage("video link'i gereklidir."),
  body("description").trim().notEmpty().withMessage("açıklama gereklidir."),
  body("section_id")
    .exists()
    .withMessage("section ID is required")
    .isMongoId()
    .withMessage("section ID must be a valid MongoDB ObjectId"),
  validator,
];

const updateLesson = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  body("index")
    .exists()
    .withMessage("sırası gereklidir.")
    .isInt({ gt: -1 })
    .withMessage("Dersin sırası pozitif numara olmalı "),
  body("name").trim().notEmpty().withMessage("ad gereklidir."),
  body("video_url").trim().notEmpty().withMessage("video link'i gereklidir."),
  body("description").trim().notEmpty().withMessage("açıklama gereklidir."),
  body("section_id")
    .exists()
    .withMessage("section ID is required")
    .isMongoId()
    .withMessage("section ID must be a valid MongoDB ObjectId"),
  validator,
];

const toggleActive = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const getLesson = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

const deleteLesson = [
  param("id")
    .trim()
    .notEmpty()
    .withMessage("id is required")
    .isMongoId()
    .withMessage("MongoDb id cinsinden olmalı."),
  validator,
];

module.exports = {
  createLesson,
  updateLesson,
  toggleActive,
  deleteLesson,
  getLesson,
};
