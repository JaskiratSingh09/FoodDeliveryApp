const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); // Import mongoose
// const { countDocuments } = require("../schema/Userinfo");

router.get("/fooditem", async (req, res) => {
  try {
    const Fooditem = mongoose.connection.collection("Fooditems");
    const Foodtags = mongoose.connection.collection("Foodtags");
    const document1 = await Fooditem.find({}).toArray();
    const document2 = await Foodtags.find({}).toArray();

    res.send([document1, document2]);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
