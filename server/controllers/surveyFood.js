const surveyFood = require("../models/surveyFood");
exports.createsurveyFood = async (req, res) => {
  try {
    let newsurveyFood = new surveyFood({
      surveyFood: req.body.surveyFood,
      description: req.body.description,
      foodNutrients: req.body.foodNutrients,
      foodAttributes: req.body.foodAttributes,
      foodCode: req.body.foodCode,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      wweiaFoodCategory: req.body.wweiaFoodCategory,
      fdcId: req.body.fdcId,
      dataType: req.body.dataType,
      publicationDate: req.body.publicationDate,
      inputFoods: req.body.inputFoods,
      foodPortions: req.body.foodPortions,
    });
    await newsurveyFood.save();
    res.send(newsurveyFood);
  } catch (err) {
    console.log(err);
  }
};
exports.readsurveyFood = async (req, res) => {
  const page = req.query.page || 0;
  const limit = req.query.limit || 25;
  try {
    surveyFood
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

exports.readsurveyFoodFromName = async (req, res) => {
  const limit = req.query.limit || 25;
  try {
    surveyFood
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

exports.readsurveyFoodFromID = async (req, res) => {
  try {
    await surveyFood.findById(
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
exports.updatesurveyFood = async (req, res) => {
  try {
    await surveyFood.findByIdAndUpdate(
      req.params.id,
      {
        surveyFood: req.body.surveyFood,
        description: req.body.description,
        foodNutrients: req.body.foodNutrients,
        foodAttributes: req.body.foodAttributes,
        foodCode: req.body.foodCode,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        wweiaFoodCategory: req.body.wweiaFoodCategory,
        fdcId: req.body.fdcId,
        dataType: req.body.dataType,
        publicationDate: req.body.publicationDate,
        inputFoods: req.body.inputFoods,
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
exports.deletesurveyFood = async (req, res) => {
  try {
    if ((await surveyFood.findById(req.params.id)) === null) {
      res.json({ app: "post not found" });
    } else {
      await surveyFood.findByIdAndRemove(req.params.id).exec();
      res.json({ app: "post deleted" });
    }
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
