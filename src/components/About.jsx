import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#E4E4DE] text-black-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1250px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1250px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello. I'm Sam Villahermosa. Please feel free to look around.</p>
            </div>
            <div>
              <p> I'm a junior at Berea College, deeply immersed in the world of Computer Science. 
                My passion lies in software development, and I'm always on the lookout for fresh learning opportunities to further refine my skills. 
                With an eye on the future, I aspire to make a meaningful mark on the tech industry, striving to enhance the lives of many through innovative solutions.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
