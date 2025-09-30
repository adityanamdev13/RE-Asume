import React from "react";
import HomeBanner from "../components/HomeBanner";
import FeaturesExplaination from "../components/FeautersExplaination";
import { MdArrowOutward } from "react-icons/md";
import FAQ from "../components/FAQ";
import FeedbackSection from "../components/FeedbackSection";


const Home = () => {
  return (
    <>
      <div className="mx-5">
        <HomeBanner />
        <div className="flex flex-wrap items-center px-8 gap-5 my-6">
          <img
            src="https://assets.flowcvassets.com/landing/flowcv-loved-by-users.webp"
            alt="users-images"
            className="h-20"
          />
          <h4 className="md:font-bold text-lg pb-4">
            Loved by over 1.4 million happy users
          </h4>
        </div>
        <FeaturesExplaination />

        <div className="md:flex  text-xl items-center gap-3 my-8 md:px-8 text-gray-800">
          <h2 className="md:text-[4rem] text-[2.2rem] font-semibold md:pr-16 leading-none">
            Showcase yourself
          </h2>
          <div className="md:p-12 p-3 ">
            <p className="mb-6">
              Re-Asume is more than just a resume builder – it's a revolutionary
              platform designed to elevate your job search experience. Our focus
              is on empowering job seekers like you to present their full
              potential and secure their dream roles, all while saving time and
              enjoying the process as much as we've enjoyed creating it!
            </p>

            <p>
              Design a seamless visual journey across your application and
              visual appearance that reflects your unique identity, making each
              aspect of your application uniquely yours. With Re-Asume, you can
              present yourself confidently and professionally, leaving a
              memorable impression on potential employers. Start building your
              distinctive brand today!
            </p>
          </div>
        </div>

        <div className="md:grid md:grid-cols-6   flex  flex-col gap-2 md:px-8 md:my-10 ">
          <div className="row-span-3 col-span-2 rounded-3xl overflow-hidden">
            <img
              src="https://assets.flowcvassets.com/landing/woman-smiling-1024.webp"
              alt="img"
              className="object-cover h-full w-full "
            />
          </div>
          <div className="bg-indigo-400 p-5 rounded-3xl text-white col-span-3">
            <h4 className="font-bold text-2xl mb-2">
              Your Career Story, Brilliantly Told
            </h4>
            <p>
              Transform your professional journey into an impactful narrative
              with Re-Asume – where innovation meets career advancement. More
              than a simple resume builder, we're your partner in professional
              growth, empowering you to showcase your authentic self to
              potential employers.
            </p>
          </div>

          <div className="font-bold text-white bg-purple-600 p-5 rounded-3xl text-2xl">
            Your Success Is Our Success
          </div>

          <div className="bg-emerald-500 p-5 rounded-3xl text-white col-span-4">
            <h4 className="font-bold text-2xl mb-2">
              Craft Your Professional Masterpiece
            </h4>
            <p>
              Re-Asume revolutionizes the way you present your career story. Our
              intelligent platform combines cutting-edge design with
              professional expertise, ensuring your resume stands out in today's
              competitive job market. Whether you're a seasoned professional or
              just starting your career journey, we provide the tools and
              guidance to make your experience shine.
            </p>
          </div>

          <div className="font-bold text-white bg-pink-600 p-5 rounded-3xl text-2xl">
            Unleash your Full Potential
          </div>

          <div className="font-bold text-white bg-blue-600 p-5 rounded-3xl col-span-3 text-xl">
            Transform your career narrative. Showcase your potential. Build your
            future with ResumeCraft.
          </div>
        </div>

        <div className="md:pl-8 md:flex items-start justify-center md:my-20 ">
          <div className="md:w-1/2 md:pt-28 pt-10">
            <h1 className="md:text-[4rem] text-[2.2rem]  text-3xl  leading-none mt-5">
              Customizable Templates
            </h1>

            <p className="text-xl  p-5  pl-0 w-96">
              Unleash possibilities with Re-Asume thoughtfully designed
              templates. For resumes, our customizable templates help you make a
              lasting impact.
            </p>
            <button className="flex bg-btn text-white font-bold px-6 py-3 items-center gap-2 rounded-lg my-8">
              <MdArrowOutward size={50} />
              <span className="text-2xl">See all templates </span>
            </button>
          </div>
          <div className=" overflow-hidden">
            <img
              src="https://assets.flowcvassets.com/landing/templates-1100.webp"
              alt="templates"
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mb-16">
          <div className="items-center lg:flex">
            <p className="text-2xl leading-[37px] tracking-[-2px] lg:mr-4 lg:flex lg:flex-col lg:items-end lg:text-right lg:text-[44px]">
              <span className="lg:w-min">One platform</span>
            </p>
            <p className="mt-3 text-[72px] leading-none tracking-[-2px] lg:mt-0 lg:text-[128px] lg:leading-[90%]">
              Countless<span className="lg:hidden"> Possibilities</span>
            </p>
          </div>
          <div className="items-center lg:flex">
            <p className="hidden text-[72px] leading-none tracking-[-2px] lg:order-4 lg:block lg:leading-[90%] xl:text-[128px]">
              Possibilities
            </p>
            <p className="xssm:w-4/5 mt-6 w-[26ch] text-lg  leading-[22px] lg:mr-8 lg:mt-6 lg:w-[26ch]">
              Re-Asume: Your Ultimate Destination for Creating Resumes. Begin
              Your Journey Today.
            </p>
          </div>
        </div>

        <div className="flex md:flex-nowrap flex-wrap items-center justify-center gap-12 px-8 my-12">
          <div className="w-96">
            <img
              src="https://www.myperfectresume.com/wp-content/uploads/2022/07/Sales-Leader-Resume-Template.svg"
              alt="resume-template"
              className=" bg-white"
            />
          </div>
          <div className="w-96">
            <img
              src="https://www.myperfectresume.com/wp-content/uploads/2022/07/Childcare-expert-resume-example.svg"
              alt="resume-template bg-white w-full"
            />
          </div>
          <div className="w-96 bg-white">
            <img
              src="https://www.myperfectresume.com/wp-content/uploads/2022/04/Line-Cook-resume-sample.svg"
              alt="resume-template"
            />
          </div>
        </div>
        <FeedbackSection />
        <FAQ />
      </div>
      <div className="bg-secondary py-16 text-center">
        <h2 className=" md:text-[5rem] text-[2rem] font-semibold ">
          Start building your future
        </h2>
        <p className=" text-gray-600 md:text-3xl md:px-40  px-5 py-5">
          Unveil your full potential with our user-friendly, non-scammy resume
          maker and career tools. Start for free and enhance with premium
          options.
        </p>
        <div className="flex justify-center">
          <button className="flex bg-btn text-white font-bold px-6 py-3 items-center gap-2 rounded-lg my-8">
            <MdArrowOutward size={50} />
            <span className="text-2xl">Get started now 🚀</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
