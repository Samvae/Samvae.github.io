import React from 'react';
import SELF from '../assets/self/self2.png';

const About = () => {
  return (
    <div name="about" className="w-full sm:h-screen bg-[#ffffff]">
      <div className="max-w-[1250px] mx-auto px-8 flex justify-center gap-8 h-full">
      {/* Left Column */}
        <div className="flex justify-center items-center max-w-[500px]">
          <img src={SELF} alt="Sam Villahermosa" className="w-98 shadow-md shadow-[#074276]" />
            </div>
      {/* Right Column */}
        <div className="flex flex-col max-w-[750px] justify-center">
            <h1 className="text-4xl font-bold inline border-b-4 border-[#074276] text-black">
            About Me
            </h1>
            <p className="text-xs sm:text-base text-black py-4">

            I'm a junior Computer Science student at Berea College, 
            and my ambition is to create applications that blend both 
            fun and practicality.  My present role at the Berea College IT department 
            has afforded me hands-on experience in both computer software and hardware, 
            but I want to dive further into the world of code. 
            Looking ahead to Summer 2024, I'm actively seeking a Software 
            Engineering internship to take my skills to the next level. 
            I'm enthusiastic about delving further into my passion by 
            collaborating with others to develop meaningful projects that 
            have a positive impact on the world.
            </p> 
        </div>
      </div>
    </div>
  );
};

export default About;
