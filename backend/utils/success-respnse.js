const successResponse = (res, message, data) => {
  res.status(200).json({
    code: 0,
    message,
    data,
  });
};

module.exports = successResponse;
