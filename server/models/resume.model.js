import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
  {
    personalDetails: {
      fullname: {
        type: String,
        required: [true, "Full name is required"],
        trim: true,
      },
      email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
      },
      mobileNumber: {
        type: String,
      },
      address: {
        type: String,
      },
      dob: {
        type: Date,
      },
    },
    links: [
      {
        _id: false,
        name: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        },
      },
    ],
    education: [
      {
        _id: false,
        degreeName: {
          type: String,
          required: true,
        },
        collegeName: {
          type: String,
          required: true,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
    experience: [
      {
        _id: false,
        CompanyName: {
          type: String,
          required: true,
        },
        position: {
          type: String,
          required: true,
        },
        responsibilities: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
    skills: [
      {
        _id: false,
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        skillLevel: {
          type: String,
          enum: ["Beginner", "Intermediate", "Advanced", "Native"],
        },
      },
    ],
    languages: [
      {
        _id: false,
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        level: {
          type: String,
          enum: ["Beginner", "Intermediate", "Advanced", "Native"],
        },
      },
    ],
    certificates: [
      {
        _id: false,
        certificateName: {
          type: String,
          required: true,
        },
        organizationName: {
          type: String,
          required: true,
        },
        certificateUrl: {
          type: String,
        },
        issueDate: {
          type: Date,
        },
        expireDate: {
          type: Date,
        },
      },
    ],
    projects: [
      {
        _id: false,
        projectName: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        url: {
          type: String,
        },
      },
    ],
    courses: [
      {
        _id: false,
        name: {
          type: String,
          required: true,
        },
        institutionName: {
          type: String,
          required: true,
        },
        description: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
    customFields: [
      {
        _id: false,
        title: {
          type: String,
          required: true,
        },
        subTitle: {
          type: String,
        },
        description: {
          type: String,
        },
        startDate: {
          type: Date,
        },
        endDate: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Resume = mongoose.model("Resume", resumeSchema);
