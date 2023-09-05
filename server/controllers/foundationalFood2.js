const foundationalFood2 = require("../models/foundationalFood2");

exports.createfoundationalFood2 = async (req, res) => {
  try {
    let newfoundationalFood2 = new foundationalFood2({
      foodClass: req.body.foodClass,
      description: req.body.description,
      foodNutrients: req.body.foodNutrients,
      foodAttributes: req.body.foodAttributes,
      nutrientConversionFactors: req.body.nutrientConversionFactors,
      isHistoricalReference: req.body.isHistoricalReference,
      ndbNumber: req.body.ndbNumber,
      fdcId: req.body.fdcId,
      dataType: req.body.dataType,
      foodCategory: req.body.foodCategory,
      foodPortions: req.body.foodPortions,
      inputFoods: req.body.inputFoods,
      publicationDate: req.body.publicationDate,
    });
    await newfoundationalFood2.save();
    res.send(newfoundationalFood2);
  } catch (err) {
    console.log(err);
  }
};
exports.readfoundationalFood2 = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    foundationalFood2
      .find({}, (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      })
      .sort()
      .skip(page * limit)
      .limit(limit);
  } catch (err) {
    console.log(err);
  }
};

exports.readfoundationalFood2FromName = async (req, res) => {
  const limit = req.query.limit || 25;
  try {
    foundationalFood2
      .find(
        { description: { $regex: req.params.name, $options: "i" } },
        (err, result) => {
          if (err) {
            res.json({ app: err });
          }
          res.send(result);
        }
      )
      .limit(limit);
  } catch (err) {
    console.log(err);
  }
};

exports.readfoundationalFood2FromID = async (req, res) => {
  try {
    await foundationalFood2.findById(
      { ndbNumber: req.params.id },
      {},
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.updatefoundationalFood2 = async (req, res) => {
  try {
    await foundationalFood2.findByIdAndUpdate(
      req.params.id,
      {
        foodClass: req.body.foodClass,
        description: req.body.description,
        foodNutrients: req.body.foodNutrients,
        foodAttributes: req.body.foodAttributes,
        nutrientConversionFactors: req.body.nutrientConversionFactors,
        isHistoricalReference: req.body.isHistoricalReference,
        ndbNumber: req.body.ndbNumber,
        fdcId: req.body.fdcId,
        dataType: req.body.dataType,
        foodCategory: req.body.foodCategory,
        foodPortions: req.body.foodPortions,
        inputFoods: req.body.inputFoods,
        publicationDate: req.body.publicationDate,
      },
      (err, result) => {
        if (err) {
          res.json({ app: err });
        }
        res.send(result);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
exports.deletefoundationalFood2 = async (req, res) => {
  try {
    if ((await foundationalFood2.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await foundationalFood2.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
