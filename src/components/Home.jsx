import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import SELF from '../assets/self1.png';
import Typewriter from "typewriter-effect";
import MovingComponent from "react-moving-text";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E4E4DE]">
      <div className="max-w-[1250px] mx-auto px-8 gap-6 flex justify-center h-full">
      {/* Left Column */}
        <div className="flex flex-col max-w-[750px] justify-center">
          <p className="text-[#000000] font-bold">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-[#000000]">
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
          <h2 className="text-4xl sm:text-7xl font-bold text-[#B58D48] h-30">
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
          <p className="text-[#000000] py-4">
            <MovingComponent
              type="slideInFromLeft"
              duration="1100ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none"
            >
              As a student and software developer, I'm fueled by boundless curiosity, dedicated to learning, 
              innovating, and crafting projects that can reshape our world. My ultimate goal is to leverage 
              technology as a catalyst for positive change, delivering solutions that enhance lives and leave a lasting mark. 
              Welcome to my portfolio, where you'll discover my world of code and creativity.
              
            </MovingComponent>
          </p>
          <div>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-white group px-6 py-3 my-2 flex items-center bg-[#B58D48] shadow-md shadow-[#040c16] hover:scale-110">
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
        <div className="flex justify-center items-center max-w-[500px]">
        <MovingComponent
                  type="slideInFromRight"
                  duration="1100ms"
                  delay="index * 100ms"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none"
                >
                  <img src={SELF} alt="Sam Villahermosa" className="w-98 rounded-full shadow-md shadow-[#595f39]" />
                </MovingComponent>
          
      </div>
    </div>
  </div>
  );
};



export default Home;
