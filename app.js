require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connecting to Mongo cloud
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.UFIT_URI);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model("Kitten", kittySchema);

const silence = new Kitten({ name: "Silence" });

async function saveToDatabase() {
  await silence.save();
}

saveToDatabase().catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("<h1>Hello Kyle & Ana!</h1>");
});

app.use(express.json())
const userRoute = require("./src/routes/user.route");
app.use("/api/users", userRoute);

app.listen(process.env.UFIT_PORT, () => {
  console.log(
    `Example app listening at http://localhost:${process.env.UFIT_PORT}`
  );
});
