const jwt = require("jsonwebtoken");
// const { getCompanyById } = require("../api/company/service");

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // req.company = await getCompanyById(decoded.id);
    next();
  } catch (e) {
    return res.status(401).json({
      code: 1,
      message: "Not Authenticated!.",
      data: null,
    });
  }
};

module.exports = authenticate;
