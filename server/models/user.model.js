import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Full name is required"],
      maxlength: [30, "Full name cannot exceed 30 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
      minlength: [6, "Password must be at least 6 characters long"],
      
    },
    resumes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Resume",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
