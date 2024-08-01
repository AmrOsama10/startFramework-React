import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-svh bg-emerald-500 flex flex-col justify-center items-center text-center">
        <img src="./avataaars.svg" alt="" className="w-1/6 py-6" />
        <h1 className="font-bold text-5xl text-white">start Framework</h1>
        <div className="flex items-center justify-content-center mb-3 py-4">
          <div className="line me-3 bg-white" ></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line ms-3 bg-white" ></div>
        </div>
        <p className="text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </>
  );
}
