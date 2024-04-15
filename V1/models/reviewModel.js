import { mongoose } from "mongoose";
const { Schema } = mongoose;

const Ireview = new Schema({
  ratting: { typeof: Number, required: true },
  review: { typeof: String },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const RevierModel = mongoose.model("Review", Ireview);
module.exports = RevierModel;
