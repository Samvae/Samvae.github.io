import React from 'react';

const Experiences = () => {

  return (
    <div name='experiences' className='w-full md:h-screen text-black-300 bg-[#ffffff]'>
      <div className='max-w-[1250px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-[#074276] text-black-300'>
            Experiences
          </p>
          <p className='py-4'>// My work experience on Berea College Campus</p>
        </div>
        {/* container for projects */}
        <div className='w-full flex flex-col justify-center gap-8 text-left'>
          {/* IT Technician */}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              January 2023 - Present
            </h1>
            <h2 className='text-sm font-bold border-b-4 text-[#000000] py-2 px-4'>
              IT Technician, IT Department
            </h2>
            <p className='text-sm text-[#000000] py-2 px-4'>
              • Delivered technical support to over 500 individuals, including students, faculty, and staff, addressing a wide range of computer-related issues. <br />
              • Diagnosed and resolved hardware and software problems on more than 100 devices, ensuring seamless user experiences. <br />
              • Executed over 50 system upgrades and installations, enhancing functionality and bolstering security measures.
            </p>
          </div>
          {/*Woodshop Worker*/}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              August 2022 - December 2022
            </h1>
            <h2 className='text-sm font-bold border-b-4 text-black-300 py-2 px-4'>
              Woodshop Worker, Arts and Crafts
            </h2>
            <p className='text-sm text-[#000000] py-4 px-4'>
              • Created highly detailed baskets, skittle boards, chairs, and tables to be sold to the Berea Log House, generating $5,000+ in revenue.<br />
              • Utilized woodworking skills and consistent use of woodworking machinery to craft new wood pieces, producing 50+ pieces of high-quality furniture.<br />
            </p>
          </div>
          {/* Complex Assistant */}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              August 2021 - May 2022
            </h1>
            <h2 className='text-sm font-bold border-b-4 text-[#000000] py-2 px-4'>
              Complex Assistant, Alumni Building
            </h2>
            <p className='text-sm text-[#00000] py-4 px-4'>
              • Communicated with 500+ visitors and donors of Berea College, ensuring positive experiences and satisfaction.<br />
              • Organized and executed 5+ successful events that increased student participation and engagement by 40%.<br />
              • Demonstrated empathy towards guests, resolving 95% of guest complaints within 24 hours.<br />
            </p>
          </div>
        </div>
      </div>
    </div>
)}


export default Experiences;
