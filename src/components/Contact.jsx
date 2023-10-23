import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#E4E4DE] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/d5c78b16-3c36-42f8-b50f-b1e36f21f3cc" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#B58D48] text-black-300'>Contact</p>
                <p className='text-black-300 py-4'>// Feel free to shoot me an email!</p>
            </div>
            <input className='bg-[#FFFFFF] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#FFFFFF]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#FFFFFF] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white group px-4 py-2 my-2 mx-auto flex items-center bg-[#B58D48] shadow-md shadow-[#040c16] hover:scale-110'>Send</button>
        </form>
    </div>
  )
}

export default Contact