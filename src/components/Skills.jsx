import React from 'react';

import HTML from '../assets/skills/html.png';
import CSS from '../assets/skills/css.png';
import JavaScript from '../assets/skills/javascript.png';
import ReactImg from '../assets/skills/react.png';
import FireBase from '../assets/skills/firebase.png';
import GitHub from '../assets/skills/github.png';
import Cplus from '../assets/skills/C++.png';
import Python from '../assets/skills/python.png';
import Git from '../assets/skills/git.png';
import SQL from '../assets/skills/sql.png';
import Nodejs from '../assets/skills/nodejs.png';
import Docker from '../assets/skills/docker.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full sm:h-screen bg-[#ffffff] text-black-300'>
      {/* Container */}
      <div className='max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#074276] '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
             <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                <p className='my-4'>PYTHON</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Cplus} alt="C++ icon" />
                <p className='my-4'>C++</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={SQL} alt="SQL icon" />
                <p className='my-4'>SQL</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Git} alt="Git icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={FireBase} alt="FireBase icon" />
                  <p className='my-4'>FIREBASE</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Nodejs} alt="Nodejs icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                  <p className='my-4'>DOCKER</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
