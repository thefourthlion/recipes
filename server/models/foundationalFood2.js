const mongoose = require("mongoose");
const foundationalFood2Schema = new mongoose.Schema(
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
    fdcId: { type: String },
    dataType: { type: String },
    foodCategory: {
      type: String,
    },
    foodPortions: [
      {
        type: String,
      },
    ],
    inputFoods: [{ type: String }],
    publicationDate: {
      type: String,
    },
  },
  { timestamps: true }
);
const foundationalFood2 = mongoose.model(
  "foundationalFood2",
  foundationalFood2Schema
);
module.exports = foundationalFood2;
