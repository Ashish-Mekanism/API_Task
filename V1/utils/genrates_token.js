import jwt from "jsonwebtoken";

const generateAccessToken = (email) => {
  return jwt.sign({ email }, "Ecom_token", { expiresIn: "1d" });
};

export default generateAccessToken;
