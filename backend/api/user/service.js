const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { sendMail } = require("../../utils/mail");
const { emailMessage } = require("../../data/messages");

const prisma = new PrismaClient();

async function createUser(data) {
  try {
    return await prisma.user.create({ data });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating user.", 500);
  }
}

async function updateUser(id, data) {
  try {
    return await prisma.user.update({ data, where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating user.", 500);
  }
}

async function getUniqueUser(key, value) {
  let user;

  try {
    user = await prisma.user.findUnique({ where: { [key]: value } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 500);
  }

  if (!user) {
    throw new ApiError("User not found.", 404);
  }

  return user;
}

async function getUser(key, value) {
  let user;

  try {
    user = await prisma.user.findFirst({ where: { [key]: value } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 500);
  }

  if (!user) {
    throw new ApiError("User not found.", 404);
  }

  return user;
}

async function getUsers() {
  try {
    return await prisma.user.findMany();
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting users.", 500);
  }
}

async function deleteUser(id) {
  try {
    return await prisma.user.delete({ where: { id } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting users.", 500);
  }
}

async function checkNoUser(key, value) {
  let user;

  try {
    user = await prisma.user.findFirst({ where: { [key]: value } });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error has occured, try again later.", 500);
  }

  if (user) {
    throw new ApiError("Error has occured, try again later.", 400);
  }
}

const signToken = (data) => {
  return jwt.sign(data, process.env.SECRET, {
    expiresIn: process.env.DURATION,
  });
};

const verifyToken = (token) => {
  const data = jwt.verify(token, process.env.SECRET);
  if (!data) {
    throw new ApiError("Invalid token.", 401);
  }
  return data;
};

sendActivationMail = async (token, email) => {
  const activation_url = `${process.env.CLIENT_URL}/activation/${token}`;

  await sendMail({
    email,
    subject: "E-posta Onaylama | Koducuk",
    message: emailMessage("activate", activation_url),
  });
};

const hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

const checkPassword = async (enteredPassword, password) => {
  const isTrue = await bcrypt.compare(enteredPassword, password);
  if (!isTrue) {
    throw new ApiError(
      "Bilgileri yanlış girmişsiniz, doğru bir şekilde tekrar yazar mısınız.",
      401
    );
  }
};

const samePassword = async (enteredPassword, password) => {
  const isTrue = await bcrypt.compare(enteredPassword, password);
  if (isTrue) {
    throw new ApiError("Ayın şifreye değiştirmek istiyorsunuz!.", 400);
  }
};

// const checkActive = async () => {
//   const isTrue = await prisma.
//   if (isTrue) {
//     throw new ApiError("Hesabınız actif değil!.", 400);
//   }
// };

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  checkNoUser,
  signToken,
  verifyToken,
  sendActivationMail,
  hashPassword,
  checkPassword,
  samePassword,
  getUniqueUser,
};
