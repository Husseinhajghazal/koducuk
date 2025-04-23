exports.errorHandler = async (error, req, res, next) => {
  console.log(error);

  res.status(error.code || 500).json({
    code: 1,
    message: error.message || "Unexpected Error.",
    data: null,
  });
};
