const express = require("express");
const Userdata = require("../schema/Userinfo");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await Userdata.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = new Userdata({ email, password });
    await newUser.save();

    res.status(200).json({ message: "User successfully saved." });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while saving the user." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await Userdata.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "User does not exist" });
    }

    if (user.email !== email) {
      return res.status(400).json({ error: "Email Does'not exist" });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    res.status(200).json({ message: "Login successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing the request." });
  }
});

module.exports = router;
