// import fs from "fs";
// import mongoose from "mongoose";
// import Userm from "./V1/models/userModel.js";
// import Productm from "./V1/models/productModel.js";

// mongoose
//   .connect("mongodb://localhost:27017/updateddata")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// const userData = JSON.parse(fs.readFileSync("./users.json", "utf8"));
// const productData = JSON.parse(fs.readFileSync("./products.json", "utf8"));

// async function saveData() {
//   try {
//     const savedUsers = await Userm.insertMany(userData);

//     const productsWithRefs = productData.map((product) => {
//       const user = savedUsers.find((user) => user.id === product.userId);
//       console.log(user);
//       if (!user) {
//         throw new Error(`User with ID ${product.userId} not found.`);
//       }
//       return { ...product, userId: user._id };
//     });
//     await Productm.insertMany(productsWithRefs);

//     console.log("Data saved to MongoDB.");
//   } catch (error) {
//     console.error("Error saving data:", error);
//   }
// }

// saveData();

import fs from "fs";
import mongoose from "mongoose";
import Userm from "./V1/models/userModel.js";
// import Productm from "./V1/models/productModel.js";

mongoose
  .connect("mongodb://localhost:27017/updateddata")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const userData = JSON.parse(fs.readFileSync("./users.json", "utf8"));
const productData = JSON.parse(fs.readFileSync("./products.json", "utf8"));

async function saveData() {
  try {
    const savedUsers = await Userm.insertMany(userData);

    console.log("error ===>", savedUsers);
    productData.map((product) => {
      const user = savedUsers.find((user) => user.id === product.userId);
      if (!user) {
        throw new Error(`User with ID ${product.userId} not found.`);
      }

      user.product_id.push(product._id);
      user.save();
      // return { ...product, userId: user._id };
      return { ...user, product_id: user.product_id };
    });

    console.log("Data saved to MongoDB.");
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

saveData();

// import fs from "fs";
// import mongoose, { Mongoose } from "mongoose";
// import Userm from "./V1/models/userModel.js";
// // import Productm from "./V1/models/productModel.js";

// mongoose
//   .connect("mongodb://localhost:27017/updateddata")
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((err) => console.error("Error connecting to MongoDB:", err));

// const userData = JSON.parse(fs.readFileSync("./users.json", "utf8"));
// const productData = JSON.parse(fs.readFileSync("./products.json", "utf8"));

// async function saveData() {
//   try {
//     // const savedUsers = await Userm.insertMany(userData);

//     // console.log("error ===>", savedUsers);
//     productData.map((product) => {
//       const user = userData.find((user) => user.id === product.userId);
//       if (!user) {
//         throw new Error(`User with ID ${product.userId} not found.`);
//       }
//       let Objid = new mongoose.Type.ObjectId(product.id);
//       Userm.updateOne({
//         $push: {
//           product_id: Objid,
//         },
//       });
//       // user.product_id.push(product._id);
//       user.save();
//       // return { ...product, userId: user._id };
//       // return { ...user, product_id: user.product_id };
//     });

//     console.log("Data saved to MongoDB.");
//   } catch (error) {
//     console.error("Error saving data:", error);
//   }
// }

// saveData();
