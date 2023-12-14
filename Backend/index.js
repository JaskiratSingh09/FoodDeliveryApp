const connectDB = require("./db");
const express = require("express");
const cors = require("cors");
const userinformation = require("./ports/User");
const food = require("./ports/Fooditem");

const port = 5000;
const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/", userinformation);
app.use("/food", food);
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
