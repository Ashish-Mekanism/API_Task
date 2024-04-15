import fs from "fs";
import mongoose from "mongoose";
import UserModel from "./V1/models/userModel.js";

const userData = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

mongoose
  .connect("mongodb://localhost:27017/Users")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

userData.forEach(async (user) => {
  try {
    await UserModel.create(user);

    console.log("user inserted into MongoDB");
  } catch (error) {
    console.error(error);
  }
});
