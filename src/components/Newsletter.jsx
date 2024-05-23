import React from "react";

export const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimise your flow{" "}
          </h1>
          <p>Sign up to your newsletter and stay up to date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter email"
              className="p-3 flex w-full rounded-md text-black "
            />
            <button className="bg-[#00df9a] rounded-md font-medium text-black ml-4 my-6 px-6 py-3 w-[200px] mx-auto">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span> 
          </p>
        </div>
      </div>
    </div>
  );
};
