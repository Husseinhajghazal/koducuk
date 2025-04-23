const ApiError = require("../models/api-error");

exports.noRoute = (req, res, next) => {
  throw new ApiError("Route Not Found.", 404);
};
