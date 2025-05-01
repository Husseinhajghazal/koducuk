const {
  createUser,
  deleteUser,
  getUsers,
  getUniqueUser,
  getUser,
  updateUser,
  checkNoUser,
  signToken,
  verifyToken,
  hashPassword,
  sendActivationMail,
  checkPassword,
  samePassword,
} = require("./service");

const successResponse = require("../../utils/successRespnse");

async function signup(req, res) {
  const { first_name, last_name, email, password } = req.body;

  await checkNoUser("email", email);

  const token = signToken({
    first_name,
    last_name,
    email,
    password,
  });

  await sendActivationMail(token, email);

  successResponse(
    res,
    "Hesabınızı etkinleştirmek için lütfen e-postanızı kontrol edin!",
    []
  );
}

async function login(req, res) {
  const { email, password } = req.body;

  const user = await getUniqueUser("email", email);

  await checkPassword(password, user.password);

  token = signToken(user.id);

  successResponse(res, success[6], [
    {
      ...user,
      token,
      expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  ]);
}

async function activateAccount(req, res) {
  let user = verifyToken(req.params.token);

  const hashedPassword = await hashPassword(user.password);

  const { first_name, last_name, email } = user;

  user = await createUser({
    password: hashedPassword,
    first_name,
    last_name,
    email,
  });

  const token = signToken(user.id);

  successResponse(res, "Hesabınızı başarıyla etkinleştirildi.", [
    {
      ...user,
      token,
      expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  ]);
}

const changePassword = async (req, res) => {
  const { old_password, new_password } = req.body;

  await checkPassword(old_password, req.user.password);
  await samePassword(new_password, req.user.password);

  const hashedPassword = await hashPassword(new_password);

  const user = await updateUser(req.user.id, { password: hashedPassword });
  successResponse(res, "Şifre başarı ile güncellendi.", [user]);
};

const changeInfo = async (req, res) => {
  const { first_name, last_name, password } = req.body;

  await checkPassword(password, req.user.password);

  const user = await updateUser(req.user.id, { first_name, last_name });

  successResponse(res, "Bilgileri başarı ile güncellendi.", [user]);
};

const toggleActive = async (req, res) => {
  const user = await updateUser(req.user.id, { active: !req.user.active });

  successResponse(res, "Durum başarı ile güncellendi.", [user]);
};

module.exports = {
  signup,
  activateAccount,
  changePassword,
  changeInfo,
  login,
  toggleActive,
};
