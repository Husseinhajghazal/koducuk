const ApiError = require("../../models/api-error");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function createUser(data) {
  try {
    return await prisma.user.create({
      data,
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: false,
        role: true,
        active: true,
        user_courses: true,
        created_at: true,
        updated_at: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while creating user.", 500);
  }
}

async function updateUser(id, data) {
  try {
    return await prisma.user.update({
      data,
      where: { id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: false,
        role: true,
        active: true,
        user_courses: true,
        created_at: true,
        updated_at: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while updating user.", 500);
  }
}

async function getUniqueUser(key, value, includePassword = false) {
  let user;

  try {
    user = await prisma.user.findUnique({
      where: { [key]: value },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: includePassword,
        role: true,
        active: true,
        user_courses: true,
        created_at: true,
        updated_at: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 500);
  }

  if (!user) {
    throw new ApiError("Kullanıcı bulanamadı.", 404);
  }

  return user;
}

async function getUser(key, value, includePassword = false) {
  let user;

  try {
    user = await prisma.user.findFirst({
      where: { [key]: value },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: includePassword,
        role: true,
        active: true,
        user_courses: true,
        created_at: true,
        updated_at: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 500);
  }

  if (!user) {
    throw new ApiError("Kullanıcı bulanamadı.", 404);
  }

  return user;
}

async function getUsers() {
  try {
    return await prisma.user.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: false,
        role: true,
        active: true,
        user_courses: true,
        created_at: true,
        updated_at: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting users.", 500);
  }
}

async function deleteUser(id) {
  try {
    return await prisma.user.delete({
      where: { id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        email: true,
        password: false,
        role: true,
        active: true,
        user_courses: true,
        created_at: true,
        updated_at: true,
      },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while deleting users.", 500);
  }
}

async function checkNoUser(key, value) {
  let user;

  try {
    user = await prisma.user.findFirst({
      where: { [key]: value },
    });
  } catch (e) {
    console.log(e);
    throw new ApiError("Error occured while getting user.", 500);
  }

  if (user) {
    throw new ApiError("Error has occured, try again later.", 400);
  }
}

async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

async function checkPassword(enteredPassword, password) {
  const isTrue = await bcrypt.compare(enteredPassword, password);
  if (!isTrue) {
    throw new ApiError(
      "Bilgileri yanlış girmişsiniz, doğru bir şekilde tekrar yazar mısınız.",
      401
    );
  }
}

async function samePassword(enteredPassword, password) {
  const isTrue = await bcrypt.compare(enteredPassword, password);
  if (isTrue) {
    throw new ApiError("Ayın şifreye değiştirmek istiyorsunuz!.", 400);
  }
}

async function checkActive(active) {
  if (!active) {
    throw new ApiError("Hesabınız aktif değil!.", 400);
  }
}

module.exports = {
  createUser,
  updateUser,
  getUsers,
  getUser,
  deleteUser,
  checkNoUser,
  hashPassword,
  checkPassword,
  samePassword,
  getUniqueUser,
  checkActive,
};
