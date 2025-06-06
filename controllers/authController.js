const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newUser = await User.create({ email, password });
    res.status(201).json({
      message: "Registation done",
      user: newUser,
    });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!User) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.cookie("jwt", token, { httpOnly: true, maxAge: 3600000 });
    res.status(200).json({
      message: "Login successfull",
      token,
    });
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({
      message: "Invalid server error",
    });
  }
};
const Logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({
      message: "Logout Successfull",
    });
  } catch (error) {
    console.log("Error : ", error.message);
    res.status(500).json({
      message: "Invalid server error",
    });
  }
};
module.exports = { registerUser, login, Logout };
