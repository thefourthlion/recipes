const express = require("express");
const router = express.Router();
const {
  createfoundationalFood2,
  readfoundationalFood2,
  readfoundationalFood2FromID,
  updatefoundationalFood2,
  deletefoundationalFood2,
  readfoundationalFood2FromName,
} = require("../controllers/foundationalFood2");
// router.route("/create").post(createfoundationalFood2);
router.route("/read").get(readfoundationalFood2);
router.route("/read/:id").get(readfoundationalFood2FromID);
router.route("/name/:name").get(readfoundationalFood2FromName);
// router.route("/update/:id").post(updatefoundationalFood2);
// router.route("/delete/:id").delete(deletefoundationalFood2);
module.exports = router;
