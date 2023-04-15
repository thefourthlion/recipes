const express = require("express");
const router = express.Router();
const {
  createRecipes,
  readRecipes,
  readRecipesFromID,
  updateRecipes,
  deleteRecipes,
} = require("../controllers/Recipes");
router.route("/create").post(createRecipes);
router.route("/read").get(readRecipes);
router.route("/read/:id").get(readRecipesFromID);
router.route("/update/:id").post(updateRecipes);
router.route("/delete/:id").delete(deleteRecipes);
module.exports = router;
