import { User } from "../models/user.model.js";
import { generateHash, compareHash } from "../utils/generateHash.js";
import dotenv from "dotenv";
import JWT from "jsonwebtoken";

dotenv.config();

export const createUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Validate required fields

    if (!fullname) {
      return res
        .status(400)
        .send({ success: false, message: "Full-name is required" });
    }
    if (!email) {
      return res.status(400).send({
        success: false,
        message: " Email is required",
      });
    }

    if (!password || password.length < 6)
      return res.status(400).send({
        success: false,
        message:
          "Password is required and length must be at least 6 characters",
      });
    // Check if the user already exists
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(400).send({
        success: false,
        message: "User already exists with this email",
      });
    }

    // Converting password into hashed password
    const hashedPassword = await generateHash(password);

    const user = await User.create({
      email,
      fullname,
      password: hashedPassword,
    });

    // Send response
    res
      .status(200)
      .json({ success: true, message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email) {
      return res.status(400).send({
        success: false,
        message: " Email is required",
      });
    }
    if (!password) {
      return res.status(400).send({
        success: false,
        message: " Password is required",
      });
    }

    // Find the user by username or email
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User does not exist",
      });
    }

    // Validate password
    const isPasswordValid = await compareHash(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Generate JWT token
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = await JWT.sign({ _id: user._id }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const userWithoutPassword = {fullname: user.fullname, email: user.email };
    // Send response
    res.status(200).send({
      success: true,
      message: "Login successful",
      user: userWithoutPassword,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};
