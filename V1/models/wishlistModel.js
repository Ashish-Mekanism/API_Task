import { mongoose } from "mongoose";
const { Schema } = mongoose;

const Wishlist = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
});

const WishlistModel = mongoose.model("Wishlist", Wishlist);

module.exports = WishlistModel;
