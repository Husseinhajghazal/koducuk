const jwt = require("jsonwebtoken");

async function signToken(data) {
  return jwt.sign(data, process.env.SECRET, {
    expiresIn: process.env.DURATION,
  });
}

async function verifyToken(token) {
  const data = jwt.verify(token, process.env.SECRET);
  if (!data) {
    throw new ApiError("Invalid token.", 401);
  }
  return data;
}

module.exports = {
  signToken,
  verifyToken,
};
