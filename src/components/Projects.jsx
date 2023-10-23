import React from 'react';
import Task from '../assets/projects/task.png';
import Clock from '../assets/projects/clock.png';
import Uzbek from '../assets/projects/uzbek.png';
import Chess from '../assets/projects/chess.png';
import Snake from '../assets/projects/python.png';
import Logo from '../assets/self/logo3.png';


const Projects = () => {
  return (
    <div name="projects" className="w-full sm:h-screen text-white-300 bg-[#ffffff]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-white-300 border-[#074276]">
            Projects
          </p>
          <p className="py-6">// Check out some of my projects!</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
            style={{ backgroundImage: `url(${Task})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
              Notes and Tasks
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Samvae/Notes-and-Tasks.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div
            style={{ backgroundImage: `url(${Chess})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Chess Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Samvae/Chess.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Clock})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Alarm Clock
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Samvae/Arduino-Alarm-Clock.git ">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Uzbek})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Uzbek Programming 
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Samvae/Uzbek-Programming-Language.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Snake})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                Python Snake Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Samvae/Python-Snake-Game.git">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Logo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-black tracking-wider">
                This Website!
              </span>
              <div className="pt-8 text-center">
                <a href="Samvae.github.io">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-white-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
