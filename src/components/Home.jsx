import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import SELF from '../assets/self.png';
import Typewriter from "typewriter-effect";
import MovingComponent from "react-moving-text";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E4E4DE]">
      <div className="max-w-[1250px] mx-auto px-8 flex flex-col justify-center h-full">
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
        <h1 className="text-4xl sm:text-7xl font-bold text-[#000000]">
          <MovingComponent
            type="slideInFromLeft"
            duration="1100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            My name is
          </MovingComponent>
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#B58D48]">
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
                strings: ["Sam Villahermosa"],
                autoStart: true,
                loop: true,
              }}
            />
          </MovingComponent>
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px]">
          <MovingComponent
            type="jelly"
            duration="1100ms"
            delay="index * 100ms"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            I'm a software developer and student who is learning to build
            exceptional user-focused applications and digital experiences. I am
            on track to graduate in May 2024 and I am actively seeking full-time
            employment opportunities.
            
          </MovingComponent>
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-black group border-2 px-6 py-3 my-2 flex items-center bg-[#B58D48] shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
              <MovingComponent
                type="jelly"
                duration="1100ms"
                delay="index * 100ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"
              >
                View My Work
              </MovingComponent>
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};



export default Home;
