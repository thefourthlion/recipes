const mongoose = require("mongoose");
const foundationalFood1Schema = new mongoose.Schema(
  {
    foodClass: {
      type: String,
    },
    description: {
      type: String,
    },
    foodNutrients: [{}],
    foodAttributes: [{}],
    nutrientConversionFactors: [{}],
    isHistoricalReference: {
      type: Boolean,
    },
    ndbNumber: {
      type: String,
    },
    foodCategory: {
      type: String,
    },
    fdcId: {
      type: String,
    },
    dataType: {
      type: String,
    },
    inputFoods: [{}],
    publicationDate: {
      type: String,
    },
    foodPortions: [{}],
  },
  { timestamps: true }
);
const foundationalFood1 = mongoose.model(
  "foundationalFood1",
  foundationalFood1Schema
);
module.exports = foundationalFood1;
