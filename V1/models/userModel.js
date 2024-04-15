import mongoose from "mongoose";

const { Schema } = mongoose;

const IUser = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  phone_number: { type: Number },
  gender: { type: String },
  birthDate: { type: Date },
  role: { type: String, required: true },
  product_id: { type: Schema.Types.ObjectId, ref: "Product" },
});

IUser.options.toJSON = {
  transform: function (doc, ret, options) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
};

const UserModel = mongoose.model("User", IUser);
export default UserModel;

// import mongoose from "mongoose";

// const { Schema } = mongoose;

// const IUser = new Schema({
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   age: { type: Number },
//   phone_number: { type: Number },
//   gender: { type: String },
//   birthDate: { type: Date },
//   role: { type: String, required: true },
// });

// IUser.options.toJSON = {
//   transform: function (doc, ret, options) {
//     ret.id = ret._id;
//     delete ret._id;
//     delete ret.__v;
//     return ret;
//   },
// };

// const UserModel = mongoose.model("User", IUser);
// export default UserModel;
