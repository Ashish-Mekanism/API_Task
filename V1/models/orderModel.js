import { mongoose } from "mongoose";
const { Schema } = mongoose;

const Iorder = new Schema({
  items: [
    {
      product_quantity: { type: Number },
      product_discount: { type: Number },

      product_price: { type: Number },
    },
  ],
  total_price: { type: Number },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const OrderModel = mongoose.model("Order", Iorder);
module.exports = OrderModel;
