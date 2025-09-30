import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsPeople, BsRocket } from "react-icons/bs";
import { IoMdArrowDropright } from "react-icons/io";

import Logo from "../components/Logo";

const About = () => {
  const features = [
    "100% Free Resume Builder - No hidden fees, no premium features locked behind paywalls",
    "Cloud Storage - Secure storage for all your resume versions",
    "ATS-Optimized Templates - Multiple professional templates designed to pass through ATS systems",
    "User-Friendly Interface - Intuitive design that makes resume creation a breeze",
    "Personal Account Management - Create, edit, and manage multiple resumes",
    "Privacy Protection - Your data security is our priority",
  ];

  const techFeatures = [
    "Fast loading times and smooth performance",
    "Secure data encryption",
    "Cross-device compatibility",
    "Seamless template switching",
    "Real-time preview and editing",
    "Automated formatting and layout optimization",
    "Cloud-based save functionality",
    "Version history and resume tracking",
  ];
  return (
    <div className="md:mx-20 mx-4 my-8">
      <h1 className="md:text-[4rem] text-[2.25rem] border-b border-black">About</h1>

      <div className="my-8">
        <p className="md:text-xl text-lg text-gray-600 mb-8 md:px-5 px-1 mx-auto leading-8">
          At <Logo size="md:text-xl text-base" /> , we believe everyone deserves access to professional
          resume tools that help them shine in their job search. Our platform
          was created with a simple mission: to provide a hassle-free,
          completely free resume building experience that helps job seekers
          stand out in today's competitive market.
        </p>
        <section className="bg-secondary rounded-2xl md:mx-10 border">
          <div className="container mx-auto md:p-8">
            <h2 className="md:text-3xl text-xl font-bold text-center text-gray-700 p-4 md:p-0 md:mb-5">
              Our Story
            </h2>
            <hr className="border-primary" />
            <div className=" p-6 text-gray-600 md:text-xl">
              <p className="mb-4">
                Born from the frustration of expensive resume builders and
                complicated formatting tools, Re-Asume was developed to
                democratize professional resume creation. We recognized that
                many talented individuals were missing out on opportunities
                simply because they lacked access to proper resume-building
                resources.
              </p>
              <p>
                This inspired us to create a platform that combines
                professional-grade tools with absolute accessibility.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto md:px-4 py-16  justify-center">
          <h2 className="text-3xl font-bold text-center md:mb-12 ">
            What We Offer
          </h2>
          <ul className="flex flex-col justify-center md:mx-20 mx-3 text-gray-600">
            {features.map((feature, index) => (
              <li
                key={index}
                className="pl-1 md:p-6 p-4 md:text-xl border-b-2 border-secondary"
              >
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-btn text-white py-16">
          <div className="container mx-auto md:px-4 px-1">
            <h2 className="md:text-3xl text-xl font-bold flex justify-center gap-3 items-end  mb-4">
              <span className="pb-1">The</span>
              <Logo size="md:text-2xl" /> <span className="pb-1"> Difference</span>
            </h2>
            <p className="md:text-xl  md:p-5 p-2">
              Unlike other resume builders that lure users with "free" services
              only to charge for basic features, we maintain complete
              transparency. Every feature, template, and tool on our platform is
              genuinely free. We believe in building trust through action, not
              empty promises.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center">Our Technology</h2>
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {techFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-xl shadow-lg py-4 px-4"
                  >
                    <IoMdArrowDropright className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600  text-xl">
          <div className="container mx-auto px-4 text-center">
            <BsRocket className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Future Vision</h2>
            <p className=" max-w-2xl mx-auto mb-16">
              We're constantly working to improve and expand our services while
              keeping them free. Our vision is to become the go-to platform for
              professional resume creation worldwide, helping millions of job
              seekers present their best selves to potential employers.
            </p>
          </div>
        </section>

        <section className="bg-white  rounded  border py-16">
          <div className="container mx-auto px-4 ">
            <BsPeople className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 text-center">
              Join Our Community
            </h2>
            <p className="text-gray-600  text-xl max-w-3xl mx-auto mb-8">
              Thousands of successful job seekers have already trusted Re-Asume
              to help them create professional, ATS-friendly resumes. Our
              growing community is a testament to the value we provide and our
              commitment to maintaining a free, high-quality service.
            </p>
          </div>
        </section>

        <section className=" pt-16 mb-10">
          <div className="container mx-auto md:px-4 px-2 ">
            <h2 className="md:text-[4rem] text-[1.9rem]  mb-6 text-center">
              Start Building Your Future
            </h2>
            <p className="text-xl text-gray-800 mb-4 mx-auto">
              Whether you're crafting your first resume or updating an existing
              one, <Logo size="md:text-xl text-base"/> provides all the tools you need to create a
              compelling resume that tells your unique story. Join our community
              today and take the first step toward your next career opportunity
              - no credit card required, no hidden fees, just pure value.
            </p>

            <p className="text-xl text-gray-800 mb-8  mx-auto">
              Create your free account today and experience the difference that
              a professionally crafted, ATS-friendly resume can make in your job
              search.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
