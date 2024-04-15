import fs from "fs";
import mongoose from "mongoose";
import ProductModel from "./V1/models/productModel.js";

const productData = JSON.parse(fs.readFileSync("./products.json", "utf-8"));

mongoose
  .connect("mongodb://localhost:27017/Products")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

productData.forEach(async (product) => {
  try {
    await ProductModel.create(product);

    console.log("products inserted into MongoDB");
  } catch (error) {
    console.error(error);
  }
});
