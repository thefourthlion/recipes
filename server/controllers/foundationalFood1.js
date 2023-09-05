const foundationalFood1 = require("../models/foundationalFood1");
exports.createfoundationalFood1 = async (req, res) => {
  try {
    let newfoundationalFood1 = new foundationalFood1({
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
    await newfoundationalFood1.save();
    res.send(newfoundationalFood1);
  } catch (err) {
    console.log(err);
  }
};
exports.readfoundationalFood1 = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    foundationalFood1
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

exports.readfoundationalFood1FromName = async (req, res) => {
  const limit = req.query.limit || 25;
  try {
    foundationalFood1
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

exports.readfoundationalFood1FromID = async (req, res) => {
  try {
    await foundationalFood1.findById(
      { fdcId: req.params.id },
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
exports.updatefoundationalFood1 = async (req, res) => {
  try {
    await foundationalFood1.findByIdAndUpdate(
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
exports.deletefoundationalFood1 = async (req, res) => {
  try {
    if ((await foundationalFood1.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await foundationalFood1.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
