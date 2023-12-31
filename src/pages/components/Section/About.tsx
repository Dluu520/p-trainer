import React from "react";

const About = () => {
  return (
    <div className="flex flex-col bg-white  justify-center items-center sm:p-10 sm:mx-52 ">
      <h3 className="font-bold text-gray-500">About Us</h3>
      <div className="flex flex-col sm:p-10 gap-5 justify-center items-center text-center sm:m-20 ">
        <h1 className="text-2xl sm:text-4xl font-bold ">
          Why choose East Star?
        </h1>
        <h1 className="text-2xl sm:text-4xl font-bold ">
          Discover our unique edge
        </h1>
        <p className="text-2xl sm:text-3xl font-light text-center">
          It&rsquo;s our commitment to your health. We deliver effective,
          efficient workouts paired with nutritional guidance to help you reach
          your fitness peak.
        </p>
      </div>
      <div className="flex  flex-col sm:flex-row  justify-center items-center gap-5 p-10 border ">
        <div className="p-5 flex flex-col gap-5 ">
          <h3 className="text-2xl sm:text-2xl font-semibold ">
            Personalised Workouts
          </h3>
          <p className=" font-medium">
            East Star&rsquo;s Expert Coaches are certified fitness pros
            dedicated to guiding you towards your health goals.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-5 ">
          <h3 className="text-2xl sm:text-2xl font-semibold ">
            Cutting-edge Facilities
          </h3>
          <p className=" font-medium">
            Our state-of-the-art facilities are designed to enhance your workout
            experience and fuel your progress.
          </p>
        </div>
        <div className="p-5 flex flex-col gap-5 ">
          <h3 className="text-2xl sm:text-2xl font-semibold ">
            Supportive Community
          </h3>
          <p className=" font-medium">
            You&rsquo;ll train alongside like-minded people who encourage and
            inspire each other towards their fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
