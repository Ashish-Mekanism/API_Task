import bcrypt from "bcrypt";
import UserModel from "../models/userModel.js";
import generateAccessToken from "../utils/genrates_token.js";

export const registration = async (req, res) => {
  try {
    const { password, ...userData } = req.body;

    const isExists = await UserModel.findOne({
      email: userData.email.toLowerCase(),
    });

    if (isExists) {
      return res.status(401).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await UserModel.create({
      ...userData,
      email: userData.email.toLowerCase(),
      password: hashedPassword,
    });

    const token = generateAccessToken(createdUser.email);

    const userWithToken = {
      ...createdUser.toJSON(),
      token,
    };

    delete userWithToken.password;

    res.status(201).json(userWithToken);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
