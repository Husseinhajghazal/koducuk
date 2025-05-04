const {
  createFeature,
  deleteFeature,
  getFeatures,
  updateFeature,
  getUniqueFeature,
} = require("./service");
const successResponse = require("../../utils/success-respnse");

async function getFeaturesController(req, res) {
  const features = await getFeatures();

  successResponse(res, "Özelikler Başarı ile çekildi.", features);
}

async function getActiveFeatures(req, res) {
  const features = await getFeatures({ active: true });

  successResponse(res, "Özelikler Başarı ile çekildi.", features);
}

async function toggleActive(req, res) {
  const id = req.params.id;

  let feature = await getUniqueFeature(id);

  feature = await updateFeature(id, { active: !feature.active });

  successResponse(res, "Durum başarı ile güncellendi.", [feature]);
}

async function getFeatureController(req, res) {
  const feature = await getUniqueFeature(req.params.id);

  successResponse(res, "Özellik başarı ile çekildi.", [feature]);
}

async function createFeatureController(req, res) {
  const { value } = req.body;

  const feature = await createFeature({
    value,
  });

  successResponse(res, "Özellik Başarı ile oluşturuldu.", [feature]);
}

async function updateFeatureController(req, res) {
  const { value } = req.body;
  const id = req.params.id;

  await getUniqueFeature(id);

  let feature = await updateFeature(id, {
    value,
  });

  successResponse(res, "Özellik başarı ile güncellendi.", [feature]);
}

async function deleteFeatureController(req, res) {
  const id = req.params.id;

  const feature = await getUniqueFeature(id);

  await deleteFeature(id);

  successResponse(res, "Özellik başarı ile silindi.", [feature]);
}

module.exports = {
  getFeaturesController,
  getActiveFeatures,
  toggleActive,
  getFeatureController,
  createFeatureController,
  updateFeatureController,
  deleteFeatureController,
};
