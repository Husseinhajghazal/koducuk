const {
  createLesson,
  deleteLesson,
  getLessons,
  updateLesson,
  getUniqueLesson,
  checkNoLesson,
} = require("./service");
const { getUniqueSection } = require("../section/service");
const successResponse = require("../../utils/success-respnse");

async function getLessonsController(req, res) {
  const lessons = await getLessons();

  successResponse(res, "Dersler başarı ile çekildi.", lessons);
}

async function getActiveLessons(req, res) {
  const lessons = await getLessons({ active: true });

  successResponse(res, "Dersler başarı ile çekildi.", lessons);
}

async function toggleActive(req, res) {
  const id = req.params.id;

  let lesson = await getUniqueLesson(id);
  lesson = await updateLesson(id, { active: !lesson.active });

  successResponse(res, "Durum Başarı ile güncellendi.", [lesson]);
}

async function getLessonController(req, res) {
  const id = req.params.id;

  const lesson = await getUniqueLesson(id);

  successResponse(res, "Bölüm Başarı ile çekildi.", [lesson]);
}

async function createLessonController(req, res) {
  const { index, name, video_url, description, section_id } = req.body;

  await getUniqueSection(section_id);

  checkNoLesson(index, section_id);

  const lesson = await createLesson({
    index,
    name,
    video_url,
    description,
    section_id,
  });

  successResponse(res, "Lesson Başarı ile oluşturuldu.", [lesson]);
}

async function updateLessonController(req, res) {
  const { index, name, video_url, description, section_id } = req.body;
  const id = req.params.id;

  await getUniqueSection(section_id);

  checkNoLesson(index, section_id, id);

  await getUniqueLesson(id);
  const lesson = await updateLesson(id, {
    index,
    name,
    video_url,
    description,
    section_id,
  });

  successResponse(res, "Durum Başarı ile güncellendi.", [lesson]);
}

async function deleteLessonController(req, res) {
  const id = req.params.id;

  let lesson = await getUniqueLesson(id);
  await deleteLesson(id);

  successResponse(res, "Ders Başarı ile silindi.", [lesson]);
}

module.exports = {
  getLessonsController,
  getActiveLessons,
  toggleActive,
  getLessonController,
  createLessonController,
  updateLessonController,
  deleteLessonController,
};
