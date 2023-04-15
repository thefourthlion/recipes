const mongoose = require("mongoose");
const RecipesSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Please provide name"] },
    instructions: {
      type: String,
      required: [true, "Please provide Instructions"],
    },
    ingredients: [
      {
        type: String,
        required: [true, "Please provide ingredients"],
      },
    ],
    amount: [{ type: String, required: [true, "Please provide amount"] }],
    cost: { type: String },
    image: { type: String },
    servingCost: {
      type: String,
    },
    timestamp: { type: String, required: [true, "Please provide timestamp"] },
  },
  { timestamps: true }
);
const Recipes = mongoose.model("Recipes", RecipesSchema);
module.exports = Recipes;
