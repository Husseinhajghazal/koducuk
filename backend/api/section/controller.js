const {
  createSection,
  deleteSection,
  getSections,
  updateSection,
} = require("./service");
const successResponse = require("../../utils/success-respnse");
 
async function getAllFeatures(req , res) { }

module.exports = {getAllSections , getSectionById , createSection , updateSection , deleteSection };
