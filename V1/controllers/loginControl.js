import fs from "fs";
import bcrypt from "bcrypt";

export const loginControl = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = JSON.parse(fs.readFileSync("./allUsers.json", "utf8"));

    const user = userData.find((u) => u.email === email);

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const { username, age, avatar } = user;
    const responseData = { username, age, email, avatar };

    res.json(responseData);
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
