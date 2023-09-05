const legacyFoods = require("../models/legacyFoods");

exports.createlegacyFoods = async (req, res) => {
  try {
    let newlegacyFoods = new legacyFoods({
      foodClass: req.body.foodClass,
      description: req.body.description,
      foodNutrients: req.body.foodNutrients,
      foodAttributes: req.body.foodAttributes,
      nutrientConversionFactors: req.body.nutrientConversionFactors,
      isHistoricalReference: req.body.isHistoricalReference,
      ndbNumber: req.body.ndbNumber,
      foodCategory: req.body.foodCategory,
      fdcId: req.body.fdcId,
      dataType: req.body.dataType,
      inputFoods: req.body.inputFoods,
      publicationDate: req.body.publicationDate,
      foodPortions: req.body.foodPortions,
    });
    await newlegacyFoods.save();
    res.send(newlegacyFoods);
  } catch (err) {
    console.log(err);
  }
};
exports.readlegacyFoods = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    legacyFoods
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

exports.readlegacyFoodsFromName = async (req, res) => {
  const limit = req.query.limit || 25;
  try {
    legacyFoods
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

exports.readlegacyFoodsFromID = async (req, res) => {
  try {
    await legacyFoods.findById(
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
exports.updatelegacyFoods = async (req, res) => {
  try {
    await legacyFoods.findByIdAndUpdate(
      req.params.id,
      {
        foodClass: req.body.foodClass,
        description: req.body.description,
        foodNutrients: req.body.foodNutrients,
        foodAttributes: req.body.foodAttributes,
        nutrientConversionFactors: req.body.nutrientConversionFactors,
        isHistoricalReference: req.body.isHistoricalReference,
        ndbNumber: req.body.ndbNumber,
        foodCategory: req.body.foodCategory,
        fdcId: req.body.fdcId,
        dataType: req.body.dataType,
        inputFoods: req.body.inputFoods,
        publicationDate: req.body.publicationDate,
        foodPortions: req.body.foodPortions,
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
exports.deletelegacyFoods = async (req, res) => {
  try {
    if ((await legacyFoods.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await legacyFoods.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
