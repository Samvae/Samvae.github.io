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

            I recently graduated with a degree in Computer Science from Berea College. 
            During my time there, I developed a passion for building applications that 
            are both enjoyable to use and practical in real life. Working in the Berea 
            College IT department gave me valuable hands-on experience with software 
            and hardware, but I’m eager to focus more deeply on coding and software development.

            As I look toward Summer 2025, I’m actively searching for a Software Engineering 
            role where I can grow my skills, learn from a team, and contribute to projects that 
            make a real difference. I’m excited about collaborating with others who share my 
            drive to create meaningful technology that improves people’s lives.
            </p> 
        </div>
      </div>
    </div>
  );
};

export default About;
