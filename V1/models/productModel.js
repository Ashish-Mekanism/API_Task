// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const Iproduct = new Schema({
//   title: { type: String, required: true },
//   price: { type: Number, required: true },
//   product_picture: { type: String },
//   description: { type: String, required: true },
//   discountPercentage: { type: Number },
//   rating: { type: String },
//   stock: { type: Number, required: true },
//   brand: { type: String },
//   category: { type: String, required: true },
//   seller: { type: Schema.Types.ObjectId, ref: "User" },
// });

// const ProductModel = mongoose.model("Product", Iproduct);

// export default ProductModel;

import mongoose from "mongoose";

const { Schema } = mongoose;

const Iproduct = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  product_picture: { type: String },
  description: { type: String, required: true },
  discountPercentage: { type: Number },
  rating: { type: String },
  stock: { type: Number, required: true },
  brand: { type: String },
  category: { type: String, required: true },
  seller: { type: Schema.Types.ObjectId, ref: "User" },
  id: { type: Number }, // Reference to User model
});

const ProductModel = mongoose.model("Product", Iproduct);

export default ProductModel;
