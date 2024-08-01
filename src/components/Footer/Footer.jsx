import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 bg-slate-700 py-20 text-white md:grid-cols-3 gap-6 ">
        <div className="col-span-1 md:mb-0">
          <h2 className="text-3xl font-semibold">LOCATION</h2>
          <p className="py-3">2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-span-1 md:mb-0">
          <h2 className="text-3xl font-semibold">AROUND THE WEB</h2>
          <div className="icons py-2">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-solid fa-globe"></i>
          </div>
        </div>
        <div className="col-span-1">
          <h2 className="text-3xl font-semibold">ABOUT FREELANCER</h2>
          <p className="py-3">
            Freelance is a free to use, licensed Bootstrap theme created by{" "}
            <br />
            Route
          </p>
        </div>
      </div>
      <div className="copyright bg-slate-800 py-4 text-center text-white">
        <h4>Copyright © Your Website 2021</h4>
      </div>
    </>
  );
}
