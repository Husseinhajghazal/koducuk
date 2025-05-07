const {
  createCourse,
  deleteCourse,
  getCourses,
  updateCourse,
  getUniqueCourse,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getCoursesController(req, res) {
  const courses = await getCourses();

  successResponse(res, "Courses başarı ile çekildi.", courses);
}

async function getActiveCourses(req, res) {
  const courses = await getCourses({ active: true });

  successResponse(res, "Courses başarı ile çekildi.", courses);
}

async function toggleActive(req, res) {
  const id = req.params.id;

  let course = await getUniqueCourse(id);
  course = await updateCourse(id, { active: !course.active });

  successResponse(res, "Course başarı ile çekildi.", [course]);
}

async function getCourseController(req, res) {
  const id = req.params.id;

  const course = await getUniqueCourse(id);

  successResponse(res, "Course başarı ile çekildi.", [course]);
}

async function createCourseController(req, res) {
  const { name, image_url } = req.body;
  const course = await createCourse({ name, image_url });

  successResponse(res, "Course başarı ile oluşturuldu.", [course]);
}

async function updateCourseController(req, res) {
  const { name, image_url } = req.body;
  const id = req.params.id;

  let course = await getUniqueCourse(id);
  course = await updateCourse(id, { name, image_url });

  successResponse(res, "Course başarı ile güncellendi.", [course]);
}

async function deleteCourseController(req, res) {
  const id = req.params.id;

  await getUniqueCourse(id);
  const course = await deleteCourse(id);

  successResponse(res, "Course başarı ile çekildi.", [course]);
}

module.exports = {
  getCoursesController,
  toggleActive,
  getActiveCourses,
  getCourseController,
  createCourseController,
  updateCourseController,
  deleteCourseController,
};
