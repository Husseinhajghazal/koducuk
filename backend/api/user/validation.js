const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validtator");

const signup = [
  body("first_name").trim().notEmpty().withMessage("Adı gerekli."),
  body("last_name").trim().notEmpty().withMessage("Soyadı gerekli."),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("e-posta gereklidir.")
    .isEmail()
    .withMessage("Lütfen geçerli bir e-posta adresi girin."),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Şifre gereklidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Şifreniz en az 1 küçük harf, 1 büyük harf, 1 rakam içermeli ve 8 ile 16 karakter arasında olmalıdır."
    ),
  ,
  validator,
];

const activate = [
  param("token").trim().notEmpty().withMessage("token gereklidir."),
  validator,
];

module.exports = { signup, activate };
