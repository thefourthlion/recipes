const mongoose = require("mongoose");
const RecipesSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide name"] },
    Instructions: {
      type: String,
      required: [true, "Please provide Instructions"],
    },
    ingredients: {
      type: String,
      required: [true, "Please provide ingredients"],
    },
    amount: { type: String, required: [true, "Please provide amount"] },
    cost: { type: String, required: [true, "Please provide cost"] },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
    image: { type: String, required: [true, "Please provide image"] },
    servingCost: {
      type: String,
      required: [true, "Please provide servingCost"],
    },
  },
  { timestamps: true }
);
const Recipes = mongoose.model("Recipes", RecipesSchema);
module.exports = Recipes;
