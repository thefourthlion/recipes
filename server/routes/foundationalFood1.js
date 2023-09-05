const express = require("express");
const router = express.Router();
const {
  createfoundationalFood1,
  readfoundationalFood1,
  readfoundationalFood1FromID,
  updatefoundationalFood1,
  deletefoundationalFood1,
  readfoundationalFood1FromName,
} = require("../controllers/foundationalFood1");
// router.route("/create").post(createfoundationalFood1);
router.route("/read").get(readfoundationalFood1);
router.route("/id/:id").get(readfoundationalFood1FromID);
router.route("/name/:name").get(readfoundationalFood1FromName);
// router.route("/update/:id").post(updatefoundationalFood1);
// router.route("/delete/:id").delete(deletefoundationalFood1);
module.exports = router;
