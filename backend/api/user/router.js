const express = require("express");

const validation = require("./validation");
const controller = require("./controller");
const authenticate = require("../../middleware/authentication");

const router = express.Router();

module.exports = router;
