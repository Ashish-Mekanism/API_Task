import { mongoose } from "mongoose";
const { Schema } = mongoose;

const Icart = new Schema({
  product_quantity: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
});

const CartModel = mongoose.model("Cart", Icart);
module.exports = CartModel;
