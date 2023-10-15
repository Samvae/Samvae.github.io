import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#E1E8ED]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-black'>Hello and Welcome!</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>
          My name is
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#B58D48]'>
          Sam Villahermosa
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm a passionate aspiring full-stack developer and software engineer dedicated to crafting innovative digital solutions 
        with a focus on user-friendly interfaces and robust back-end systems.
        </p>
        <div>
        <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-gold hover:border-white'>
            Resume
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
