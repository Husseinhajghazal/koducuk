const { body, param, query } = require("express-validator");
const { validator } = require("../../middleware/validator");

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
  validator,
];

const login = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("eposta gereklidir.")
    .isEmail()
    .withMessage("Lütfen geçerli bir e-posta adresi girin."),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("şifre gereklidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be between 8 and 16 characters long."
    ),
  validator,
];

const updatePassword = [
  body("old_password")
    .trim()
    .notEmpty()
    .withMessage("eski şifre gerekli.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Şifreniz en az 1 küçük harf, 1 büyük harf, 1 rakam içermeli ve 8 ile 16 karakter arasında olmalıdır."
    ),
  body("new_password")
    .trim()
    .notEmpty()
    .withMessage("yeni şifre gereklidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Şifreniz en az 1 küçük harf, 1 büyük harf, 1 rakam içermeli ve 8 ile 16 karakter arasında olmalıdır."
    ),
  body("confirm_password")
    .trim()
    .notEmpty()
    .withMessage("Confirm password required.")
    .custom((value, { req }) => {
      if (value !== req.body.new_password) {
        throw new ApiError(
          "Confirm password and new password do not match.",
          422
        );
      }
      return true;
    }),
  validator,
];

const updateInfo = [
  body("first_name").trim().notEmpty().withMessage("Ad required."),
  body("last_name").trim().notEmpty().withMessage("Soyad gereklidir."),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("şifre gereklidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Şifreniz en az 1 küçük harf, 1 büyük harf, 1 rakam içermeli ve 8 ile 16 karakter arasında olmalıdır."
    ),
  validator,
];

const toggleActive = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const activateAccount = [
  param("token").trim().notEmpty().withMessage("token gereklidir."),
  validator,
];

const updateEmailRequest = [
  body("old_email")
    .trim()
    .notEmpty()
    .withMessage("eski eposta gereklidir.")
    .isEmail()
    .withMessage("Lütfen geçerli bir e-posta adresi girin."),
  body("new_email")
    .trim()
    .notEmpty()
    .withMessage("yeni eposta gereklidir.")
    .isEmail()
    .withMessage("Lütfen geçerli bir e-posta adresi girin.")
    .custom((value, { req }) => {
      if (value === req.body.old_email) {
        throw new ApiError("aynı e-postaya geçemezsin.", 400);
      }
      return true;
    }),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("şifre gereklidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be between 8 and 16 characters long."
    ),
  validator,
];

const updateEmail = [
  param("token").trim().notEmpty().withMessage("token gereklidir."),
  validator,
];

const forgetPassword = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("eposta gereklidir.")
    .isEmail()
    .withMessage("Lütfen geçerli bir e-posta adresi girin."),
  validator,
];

const updatePasswordByToken = [
  param("token").trim().notEmpty().withMessage("token gereklidir."),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("şifre gereklidir.")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,16}$/)
    .withMessage(
      "Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and be between 8 and 16 characters long."
    ),
  body("confirm_password")
    .trim()
    .notEmpty()
    .withMessage("şifre gereklidir.")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new ApiError(
          "Confirm password and new password do not match",
          422
        );
      }
      return true;
    }),
  validator,
];

const getUser = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

const deleteUser = [
  param("id").trim().notEmpty().withMessage("id gereklidir."),
  validator,
];

module.exports = {
  getUser,
  deleteUser,
  login,
  signup,
  updateInfo,
  updateEmail,
  toggleActive,
  forgetPassword,
  updatePassword,
  activateAccount,
  updateEmailRequest,
  updatePasswordByToken,
};
