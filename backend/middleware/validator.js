const ApiError = require("../models/api-error");
const { validationResult } = require("express-validator");

exports.validator = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new ApiError(errors.array()[0].msg, 422));
  } else {
    next();
  }
};
