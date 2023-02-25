const express = require("express");
const router = express.Router();
const {
  createlegacyFoods,
  readlegacyFoods,
  readlegacyFoodsFromID,
  updatelegacyFoods,
  deletelegacyFoods,
} = require("../controllers/legacyFoods");
// router.route("/create").post(createlegacyFoods);
router.route("/read").get(readlegacyFoods);
router.route("/read/:id").get(readlegacyFoodsFromID);
// router.route("/update/:id").post(updatelegacyFoods);
// router.route("/delete/:id").delete(deletelegacyFoods);
module.exports = router;
