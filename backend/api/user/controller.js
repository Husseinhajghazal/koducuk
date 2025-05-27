const {
  createUser,
  getUniqueUser,
  updateUser,
  checkNoUser,
  hashPassword,
  checkPassword,
  samePassword,
  checkActive,
  getUsers,
  deleteUser,
} = require("./service");

const { signToken, verifyToken } = require("../../utils/helpers");
const { sendMail } = require("../../utils/mail");
const successResponse = require("../../utils/success-respnse");

async function signup(req, res) {
  const { first_name, last_name, email, password } = req.body;

  await checkNoUser("email", email);

  const token = await signToken({
    first_name,
    last_name,
    email,
    password,
  });

  await sendMail("uyeol", token, email, "E-posta Onaylama | Koducuk");

  successResponse(
    res,
    "Hesabınızı etkinleştirmek için lütfen e-postanızı kontrol edin!",
    []
  );
}

async function login(req, res) {
  const { email, password } = req.body;

  const { password: hashedPassword, ...user } = await getUniqueUser(
    "email",
    email,
    true
  );

  checkActive(user.active);

  await checkPassword(password, hashedPassword);

  token = await signToken({ id: user.id });

  successResponse(res, "Başarı ile giriş yaptınız.", [
    {
      ...user,
      token,
      expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  ]);
}

async function activateAccount(req, res) {
  let user = await verifyToken(req.params.token);

  const hashedPassword = await hashPassword(user.password);

  const { first_name, last_name, email } = user;

  user = await createUser({
    password: hashedPassword,
    first_name,
    last_name,
    email,
  });

  const token = await signToken({ id: user.id });

  successResponse(res, "Hesabınızı başarıyla etkinleştirildi.", [
    {
      ...user,
      token,
      expiresIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  ]);
}

async function updatePassword(req, res) {
  const { old_password, new_password } = req.body;

  await checkPassword(old_password, req.user.password);
  await samePassword(new_password, req.user.password);

  const hashedPassword = await hashPassword(new_password);

  const user = await updateUser(req.user.id, { password: hashedPassword });
  successResponse(res, "Şifre başarı ile güncellendi.", [user]);
}

async function updateInfo(req, res) {
  const { first_name, last_name, password } = req.body;

  await checkPassword(password, req.user.password);

  const user = await updateUser(req.user.id, { first_name, last_name });

  successResponse(res, "Bilgileri başarı ile güncellendi.", [user]);
}

async function toggleActive(req, res) {
  let user = await getUniqueUser("id", req.params.id);
  user = await updateUser(user.id, { active: !user.active });

  successResponse(res, "Durum başarı ile güncellendi.", [user]);
}

async function updateEmailRequest(req, res) {
  const { password, old_email, new_email } = req.body;

  await checkNoUser("email", new_email);

  await getUniqueUser("email", old_email);

  await checkPassword(password, req.user.password);

  const token = await signToken({ old_email, new_email });

  await sendMail("update", token, old_email, "E-postan güncelleme | Arniva");

  successResponse(
    res,
    "E-postanızı değiştirmek için, E-postanızı kontrole edin.",
    []
  );
}

async function updateEmail(req, res) {
  const data = await verifyToken(req.params.token);

  let user = await getUniqueUser("email", data.old_email);
  user = await updateUser(user.id, { email: data.new_email });

  successResponse(res, "Başarı ila güncellendi.", [user]);
}

async function forgetPassword(req, res) {
  const email = req.body.email;

  const token = await signToken({ email });

  const user = await getUniqueUser("email", email);

  checkActive(user.active);

  await sendMail("unutum", token, email, "Şifre güncelleme | Arniva");

  successResponse(
    res,
    "Şifrenizi güncellemek için, e-postanızı kontrol edin.",
    []
  );
}

async function updatePasswordByToken(req, res) {
  const { password } = req.body;

  const data = await verifyToken(req.params.token);

  let user = await getUniqueUser("email", data.email, true);

  checkActive(user.active);

  await samePassword(password, user.password);

  const hashedPassword = await hashPassword(password);

  user = await updateUser(user.id, { password: hashedPassword });

  successResponse(res, "Başarı ile güncellendi", [user]);
}

async function getUserController(req, res) {
  let user = await getUniqueUser("id", req.params.id);

  successResponse(res, "Kullanıcı başarı ile Çekildi.", [user]);
}

async function getUsersController(req, res) {
  const users = await getUsers();

  successResponse(res, "Kullanıcılar başarı ile Çekildi.", users);
}

async function deleteUserController(req, res) {
  const user = await getUniqueUser("id", req.params.id);

  await deleteUser(user.id);

  successResponse(res, "Kullanıcılar başarı ile Çekildi.", [user]);
}

module.exports = {
  login,
  signup,
  updateInfo,
  updateEmail,
  toggleActive,
  forgetPassword,
  updatePassword,
  activateAccount,
  getUserController,
  updateEmailRequest,
  getUsersController,
  deleteUserController,
  updatePasswordByToken,
};
