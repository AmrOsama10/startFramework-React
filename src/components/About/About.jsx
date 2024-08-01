import React from 'react'

export default function About() {
  return (
    <>
      <div className="h-svh bg-emerald-500 flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-5xl text-white">about component</h1>
        <div className="flex items-center justify-content-center mb-3 py-4">
          <div className="line me-3 bg-white"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line ms-3 bg-white"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-3 py-4 w-1/2">
  <div className="me-3 md:me-0 text-white text-center">
    <p>
      Freelancer is a free bootstrap theme created by Route. The
      download includes the complete source files including HTML, CSS,
      and JavaScript as well as optional SASS stylesheets for easy
      customization.
    </p>
  </div>
  <div className="ms-3 md:ms-0 text-white">
    <p>
      Freelancer is a free bootstrap theme created by Route. The
      download includes the complete source files including HTML, CSS,
      and JavaScript as well as optional SASS stylesheets for easy
      customization.
    </p>
  </div>
</div>
      </div>
    </>
  );
}
