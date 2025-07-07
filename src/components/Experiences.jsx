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
            {/* Web/Database Analyst */}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              January 2024 - May 2025
            </h1>
            <h2 className='text-sm font-bold border-b-4 text-[#000000] py-2 px-4'>
              Web/Database Analyst, Information Technology Department
            </h2>
            <p className='text-sm text-[#000000] py-2 px-4'>
              • Developed and deployed custom full-stack web applications integrated with secure PostgreSQL databases, supporting over 2,300 campus users. <br />
              • Maintained and queried databases with sensitive records, enabling internal tools and web-based reporting systems. <br />
              • Led backend development for the Student Government Association voting platform, ensuring secure elections. <br />
              • Coordinated Agile team sprints using Jira and improved process documentation via internal Wiki updates.
            </p>
          </div>
          Coordinated Agile team sprints using Jira and improved process documentation via internal Wiki updates.
          {/*Undergraduate Research Assistant*/}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              May 2024 - July 2024
            </h1>
            <h2 className='text-sm font-bold border-b-4 text-black-300 py-2 px-4'>
              Undergraduate Research Assistant, URCPP Program
            </h2>
            <p className='text-sm text-[#000000] py-4 px-4'>
              • Built image processing algorithms using OpenCV to detect and count stars from 1,000+ NASA images.<br />
              • Applied parallel processing techniques in Python to improve runtime efficiency by 70% for image classification.<br />
              • Engineered reusable data pipelines to clean and analyze large scientific image sets for statistical modeling.
            </p>
          </div>
          {/*Information Technology Technician*/}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              January 2023 - January 2024
            </h1>
            <h2 className='text-sm font-bold border-b-4 text-black-300 py-2 px-4'>
              Information Technology Technician, Information Technology Department
            </h2>
            <p className='text-sm text-[#000000] py-4 px-4'>
              • Resolved hardware, software, and network issues for over 1000+ faculty, staff, and student devices.<br />
              • Maintained user accounts, access controls, and authentication using Active Directory, enhancing system security.<br />
              • Mentored incoming IT technicians and created standardized troubleshooting documentation, improving team onboarding and service consistency.
            </p>
          </div>
          {/*Woodshop Worker*/}
          <div className='hover:scale-110 duration-500'>
            <h1 className='text-lg font-bold text-[#074276 py-2 px-4'>
              August 2022 - Jan 2023
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
