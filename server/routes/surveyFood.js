const express = require("express");
const router = express.Router();
const {
  createsurveyFood,
  readsurveyFood,
  readsurveyFoodFromID,
  updatesurveyFood,
  deletesurveyFood,
} = require("../controllers/surveyFood");
router.route("/create").post(createsurveyFood);
router.route("/read").get(readsurveyFood);
router.route("/read/:id").get(readsurveyFoodFromID);
router.route("/update/:id").post(updatesurveyFood);
router.route("/delete/:id").delete(deletesurveyFood);
module.exports = router;
