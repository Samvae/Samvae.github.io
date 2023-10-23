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
            I'm a junior Computer Science student at Berea College, driven by a 
            passion for technology and the potential it holds to enhance lives. 
            I currently work at the Berea College IT department, 
            where I've gained valuable insights and experience in the field. Now, 
            I'm enthusiastic about the opportunity to apply my skills and knowledge 
            in real-world scenarios. As I approach Summer 2024, I'm actively searching 
            for a Software Engineering internship, aligning my educational experience with 
            practical application. I'm eager to delve deeper into this passion by building 
            impactful projects and contributing to innovative employment opportunities, as 
            I'm dedicated to making the transition from my current role to a full-fledged software developer.
            </p> 
        </div>
      </div>
    </div>
  );
};

export default About;
