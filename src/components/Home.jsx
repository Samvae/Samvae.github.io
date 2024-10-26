import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import SELF from '../assets/self/self1.png';
import Typewriter from "typewriter-effect";
import MovingComponent from "react-moving-text";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#ffffff]">
      <div className="max-w-[1250px] mx-auto px-8 gap-6 flex justify-center h-full">
      {/* Left Column */}
        <div className="flex flex-col max-w-[750px] justify-center">
          <p className="text-xs sm:text-base text-[#000000] font-bold">
            <MovingComponent
              type="slideInFromRight"
              duration="1100ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              Hello and Welcome! 
            </MovingComponent>
          </p>
          <h1 className="text-sm sm:text-4xl font-bold text-[#000000]">
            <MovingComponent
              type="slideInFromLeft"
              duration="1100ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              I am
            </MovingComponent>
          </h1>
          <h2 className="text-base sm:text-6xl font-bold text-[#074276]">
            <MovingComponent
              type="jelly"
              duration="1100ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              <Typewriter
                options={{
                  strings: ["Sam Villahermosa", "a Software Developer", "a CS Student"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </MovingComponent>
          </h2>
          <p className="text-xs sm:text-base text-[#000000] py-4">
            <MovingComponent
              type="slideInFromLeft"
              duration="1100ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              I'm a student and software developer with a passion for continuous learning, creativity, and 
              building projects that have the potential to make a significant impact on our world. 
              My goal is to harness the power of technology as a force for positive change,  
              whether through creating tools that enhance everyday life or building experiences that bring joy and entertainment. 
              Thank you for visiting my portfolio!
              
            </MovingComponent>
          </p>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-xs sm:text-base text-white group px-6 py-3 my-2 flex items-center bg-[#074276] shadow-md shadow-[#040c16] hover:scale-110">
                <MovingComponent
                  type="jelly"
                  duration="1100ms"
                  delay="index * 100ms"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  Look around!
                </MovingComponent>
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
        {/* Right Column */}
        <div className="flex justify-center items-center max-w-[500px] h-full">
        <MovingComponent
                  type="slideInFromRight"
                  duration="1100ms"
                  delay="index * 100ms"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <img src={SELF} alt="Sam Villahermosa" className="w-98 rounded-full shadow-md shadow-[#074276]" />
                </MovingComponent>
          
      </div>
    </div>
  </div>
  );
};



export default Home;
