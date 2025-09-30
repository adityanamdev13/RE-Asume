import { Resume } from "../models/resume.model.js";

export const createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    
    res.status(201).json({
      success: true,
      resume: savedResume,
      message: "Resume created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};