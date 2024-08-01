import React, { useState } from 'react'
import img from '../../../img/poert1.png'
import img2 from '../../../img/port2.png'
import img3 from '../../../img/port3.png'

export default function Portfolio() {

  const [imgs] = useState([
    { img: img },
    { img: img2 },
    { img: img3 },
    { img: img },
    { img: img2 },
    { img: img3 },
  ]);

  
const [selectedImg, setSelectedImg] = useState(null);

  
  const Layer = (imgSrc) => {
    setSelectedImg(imgSrc);
  };

  const closeLayer = () => {
    setSelectedImg(null);
  };

  const handleImgClick = (e) => {
    e.stopPropagation();
  };  



  return (
    <>
      <div className="flex flex-col justify-center items-center pt-32">
        <div className="">
          <h1 className="font-bold text-5xl text-slate-950">
            portfolio component
          </h1>
        </div>
        <div className="flex items-center  mb-3 py-4">
          <div className="line me-3 bg-slate-950"></div>
          <i className="fa-solid fa-star text-slate-950"></i>
          <div className="line ms-3 bg-slate-950"></div>
        </div>
      </div>
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5">
        {imgs.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              Layer(item.img);
            }}
            className="relative col-span-1 overflow-hidden"
          >
            <img src={item.img} alt="" className="w-full p-4 rounded-3xl" />
            <div className=" absolute top-4 start-4 end-4 bottom-4 rounded-lg flex justify-center items-center opacity-0 bg-emerald-500 hover:opacity-60 transa  ">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={closeLayer}
        className={`layer-img fixed top-0 w-full h-screen z-30 flex justify-center items-center text-center ${
          selectedImg ? "flex" : "hidden"
        }`}
      >
        {selectedImg && (
          <img
            src={selectedImg}
            alt=""
            className="w-2/6 md:w-2/6"
            onClick={handleImgClick}
          />
        )}
      </div>
    </>
  );
}
