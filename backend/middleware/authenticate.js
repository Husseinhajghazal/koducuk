const { getUniqueUser, checkActive } = require("../api/user/service");
const { verifyToken } = require("../utils/helpers");

const authenticate = async (req, res, next) => {
  let id;
  try {
    const token = req.headers.authorization.split(" ")[1];

    id = verifyToken(token);
  } catch (e) {
    throw new ApiError("Not Authenticated!.", 401);
  }

  req.user = await getUniqueUser("id", id);

  checkActive(req.user.active);

  next();
};

const checkAdmin = async (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    throw new ApiError("Not Authorized!.", 403);
  }

  next();
};

const checkBasicUser = async (req, res, next) => {
  if (req.user.role !== "BASIC_USER") {
    throw new ApiError("Not Authorized!.", 403);
  }

  next();
};

const checkStandardUser = async (req, res, next) => {
  if (req.user.role !== "STANDARD_USER") {
    throw new ApiError("Not Authorized!.", 403);
  }

  next();
};

const checkPremiumUser = async (req, res, next) => {
  if (req.user.role !== "PREMIUM_USER") {
    throw new ApiError("Not Authorized!.", 403);
  }

  next();
};

module.exports = {
  authenticate,
  checkAdmin,
  checkBasicUser,
  checkStandardUser,
  checkPremiumUser,
};
