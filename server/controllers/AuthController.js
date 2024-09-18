import UserModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import c from "config";
import jwt from "jsonwebtoken";

// Register new user
export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashedPassword;
  const newUser = new UserModel(req.body);
  const { username } = req.body;
  try {
    // addition new
    const existingUser = await UserModel.findOne({ username });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // changed
    const user = await newUser.save();
    const token = jwt.sign(
      { username: user.username, id: user._id },
      c.get("JWTKEY"),
      { expiresIn: "1h" }
    );
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username: username });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        res.status(400).json("wrong password");
      } else {
        const token = jwt.sign(
          { username: user.username, id: user._id },
          c.get("JWTKEY"),
          { expiresIn: "1d" }
        );
        res.status(200).json({ user, token });
      }
    } else {
      res.status(404).json("User not found❗");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
