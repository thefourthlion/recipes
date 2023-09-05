const mongoose = require("mongoose");
const surveyFoodSchema = new mongoose.Schema(
  {
    surveyFood: { type: String },
    description: {
      type: String,
    },
    foodNutrients: [
      {
        type: String,
      },
    ],
    foodAttributes: [
      {
        type: String,
      },
    ],
    foodCode: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    wweiaFoodCategory: {
      type: String,
    },
    fdcId: { type: String },
    dataType: { type: String },
    publicationDate: {
      type: String,
    },
    inputFoods: [{ type: String }],
    foodPortions: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
const surveyFood = mongoose.model("surveyFood", surveyFoodSchema);
module.exports = surveyFood;
