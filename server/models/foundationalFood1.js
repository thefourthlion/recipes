const mongoose = require("mongoose");
const foundationalFood1Schema = new mongoose.Schema(
  {
    foodClass: {
      type: String,
    },
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
    inputFoods: [
      {
        type: String,
      },
    ],
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
const foundationalFood1 = mongoose.model(
  "foundationalFood1",
  foundationalFood1Schema
);
module.exports = foundationalFood1;
