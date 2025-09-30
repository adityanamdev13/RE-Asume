import React from "react";
import {
  BiCustomize,
  BiSave,
  BiDownload,
  BiLayout,
  BiCheckShield
} from "react-icons/bi";

const FeaturesExplaination = () => {
  const features = [
    {
      icon: <BiLayout size={32} />,
      title: "Professional Templates",
      description: "Choose from Multiple Professional Resume Templates",
      color: "bg-pink-500",
    },
    {
      icon: <BiCustomize size={32} />,
      title: "Easy Customization",
      description: "Edit and Customize Your Resume with Simple Steps",
      color: "bg-purple-500",
    },
    {
      icon: <BiSave size={32} />,
      title: "Save Progress",
      description: "Create an Account to Save and Edit Your Resumes Anytime",
      color: "bg-blue-500",
    },
    {
      icon: <BiDownload size={32} />,
      title: "Free Download",
      description: "Download Your Resume in PDF Format for Free",
      color: "bg-teal-500",
    },
    {
        icon: <BiCheckShield size={32} />,
        title: "ATS Friendly",
        description: "Ensure Your Resume Passes Applicant Tracking Systems",
      color: "bg-indigo-500",
    },
  ];

  const CustomCard = ({ color, icon, title, description }) => (
    <div className="rounded-[3rem] rounded-bl-none overflow-hidden md:w-60">
      <div className={`${color} p-6`}>
        <div className="flex justify-center text-white mb-4">{icon}
        </div>
        <h2 className=" font-bold text-white text-center mb-2">
          {title}
        </h2>
        <p className="text-white/90 text-sm h-14 text-center">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full  mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        {features.map((feature, index) => (
          <CustomCard
            key={index}
            color={feature.color}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesExplaination;
