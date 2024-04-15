import fs from "fs";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  const { username, age, email, password } = req.body;

  const saltRound = 10;
  const hash_password = await bcrypt.hash(password, saltRound);

  const newUser = {
    username,
    age,
    email,
    password: hash_password,
    avatar: "https://i.pravatar.cc/300",
  };
  // console.log(password);
  if (!username || !age || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const allUsers = JSON.parse(fs.readFileSync("./allUsers.json", "utf8"));
    // console.log(" ===>", allUsers);

    const isExists = allUsers.find(
      (user) => user.email.toLowerCase() === email.toLowerCase()
    );
    if (isExists) {
      return res.status(401).json({ error: "User already Exists" });
    }

    allUsers.push(newUser);

    fs.writeFileSync("./allUsers.json", JSON.stringify(allUsers));
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Error creating user" });
  }
};
