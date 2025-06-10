const {
  createUserCourse,
  deleteUserCourse,
  getUniqueUserCourse,
  getUsersCourses,
  updateUserCourse,
  checkNoUserCourse,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getUsersCourse(req, res) {
  const course_id = req.params.course_id;

  const usersCourse = await getUsersCourses({ course_id });

  successResponse(
    res,
    "Başarı ile bu course'a katılan tüm kullanıcılar çekildi.",
    usersCourse
  );
}

async function isSubscribed(req, res) {
  const course_id = req.params.course_id;
  const user_id = req.user.id;

  const usersCourse = await getUsersCourses({ course_id, user_id });

  successResponse(res, "Bu kursa daha önceden katılmışsınız.", [
    usersCourse.length > 0 ? true : false,
  ]);
}

async function getUserCourse(req, res) {
  const id = req.params.id;

  const userCourse = await getUniqueUserCourse(id);

  successResponse(res, "Başarı ile kullanıcı ve kurse bilgileri çekildi.", [
    userCourse,
  ]);
}

async function createUserCourseController(req, res) {
  const { course_id } = req.body;
  const user_id = req.user.id;

  checkNoUserCourse(user_id, course_id);

  const userCourse = createUserCourse({ user_id, course_id });

  successResponse(res, "Başarı ile bu kursaya katıldınız.", [userCourse]);
}

async function updateUserCourseController(req, res) {
  const { score, reached_lesson } = req.body;
  const course_id = req.params.id;

  let userCourse = await getUsersCourses({ course_id, user_id: req.user.id });
  userCourse = await updateUserCourse(userCourse[0].id, {
    score: userCourse[0].score + score,
    reached_lesson: userCourse[0].reached_lesson + reached_lesson,
  });

  successResponse(
    res,
    "Başarı ile kurse'teki seviyeniz ve scorenuz güncellendi.",
    [userCourse]
  );
}

async function deleteUserCourseController(req, res) {
  const id = req.params.id;

  const userCourse = await getUniqueUserCourse(id);
  deleteUserCourse(id);

  successResponse(
    res,
    "Başarı ile bu kullanıcı, artık şu course'a katılamıyor.",
    [userCourse]
  );
}

module.exports = {
  getUsersCourse,
  getUserCourse,
  createUserCourseController,
  updateUserCourseController,
  deleteUserCourseController,
  isSubscribed,
};
