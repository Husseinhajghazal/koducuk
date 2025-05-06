const {
  createSection,
  deleteSection,
  getSections,
  updateSection,
  getUniqueSection,
} = require("./service");
const { getUniqueCourse } = require("../course/service");
const successResponse = require("../../utils/success-respnse");

async function getSectionsController(req, res) {
  const sections = await getSections();

  successResponse(res, "Bölümler başarı ile çekildi", sections);
}

async function getActiveSections(req, res) {
  const sections = await getSections({ active: true });

  successResponse(res, "Bölümler başarı ile çekildi", sections);
}

async function toggleActive(req, res) {
  const id = req.params.id;

  let section = await getUniqueSection(id);

  section = await updateSection(id, { active: !section.active });

  successResponse(res, "Durum başarı ile güncellendi.", [section]);
}

async function getSectionController(req, res) {
  const id = req.params.id;

  const section = await getUniqueSection(id);

  successResponse(res, "Bölüm başarı ile çekildi.", [section]);
}

async function createSectionController(req, res) {
  const { name, course_id } = req.body;

  await getUniqueCourse(course_id);

  const section = await createSection({ name, course_id });

  successResponse(res, "Bölüm başarı ile oluşturuldu.", [section]);
}

async function updateSectionController(req, res) {
  const { name, course_id } = req.body;
  const id = req.params.id;

  await getUniqueCourse(course_id);

  let section = await getUniqueSection(id);

  section = await updateSection(id, { name, course_id });

  successResponse(res, "Bölüm başarı ile güncellendi.", [section]);
}

async function deleteSectionController(req, res) {
  const id = req.params.id;

  const section = await getUniqueSection(id);

  await deleteSection(id);

  successResponse(res, "Bölüm başarı ile silindi.", [section]);
}

module.exports = {
  getSectionsController,
  getActiveSections,
  toggleActive,
  getSectionController,
  createSectionController,
  updateSectionController,
  deleteSectionController,
};
