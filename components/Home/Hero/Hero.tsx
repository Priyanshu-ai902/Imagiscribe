import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 min-h-screen flex items-center justify-center pb-32">
      <div className="text-center px-6 md:px-12">
        {/* Gradient Text */}
        <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
          Transform Ideas into Stunning Images
        </h1>
        <p className="text-blue-300 mt-4 text-lg md:text-xl">
          Leverage AI to generate beautiful, unique visuals in seconds.
        </p>

       
      </div>
    </section>
  );
};

export default Hero;
