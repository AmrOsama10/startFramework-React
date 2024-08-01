import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-32">
        <div className="">
          <h1 className="font-bold text-5xl text-slate-950">contact section</h1>
        </div>
        <div className="flex items-center  mb-3 py-4">
          <div className="line me-3 bg-slate-950"></div>
          <i className="fa-solid fa-star text-slate-950"></i>
          <div className="line ms-3 bg-slate-950"></div>
        </div>
      </div>

      <div className="container mx-auto  pb-24">
        <form action="" className='grid gap-5 mx-auto w-full md:w-1/2 '>
        
          <input type="text" placeholder='userName' className=' input-contact py-4 border-none' />
          <input type="text" placeholder='userAge'className=' input-contact py-4 border-none' />
          <input type="email" placeholder='userEmail'className=' input-contact py-4 border-none' />
          <input type="password" placeholder='userPassword'className=' input-contact py-4 border-none' />
          <button className='btn-tlw'>send Message</button>
        </form>
      </div>
    </>
  );
}
