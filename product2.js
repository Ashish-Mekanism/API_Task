import fs from "fs";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/updateddata")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userData = JSON.parse(fs.readFileSync("./users.json"));
const productData = JSON.parse(fs.readFileSync("./products.json"));

async function updateUserDetailsInProductData() {
  productData.forEach((product) => {
    const user = userData.find((user) => user.id === product.userId);
    if (user) {
      product.email = user.email;
      product.password = user.password;
    }
  });
}

async function insertProductData() {
  try {
    await updateUserDetailsInProductData();

    const collection = mongoose.connection.collection("products");

    await collection.insertMany(productData);
    console.log("Product data with user details added to MongoDB:");
  } catch (error) {
    console.error("Error inserting data into MongoDB:", error);
  }
}

insertProductData();
