const mongoose = require("mongoose");
const legacyFoodsSchema = new mongoose.Schema(
  {
    foodClass: { type: String },
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
    nutrientConversionFactors: [
      {
        type: String,
      },
    ],
    isHistoricalReference: {
      type: String,
    },
    ndbNumber: { type: String },
    foodCategory: {
      type: String,
    },
    fdcId: { type: String },
    dataType: { type: String },
    inputFoods: [{ type: String }],
    publicationDate: {
      type: String,
    },
    foodPortions: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);
const legacyFoods = mongoose.model("legacyFoods", legacyFoodsSchema);
module.exports = legacyFoods;
