import React from "react";
import img from "./shanks.jpg";

export const Work1 = () => {
  return (
    <div className="max-h-screen bg-sky-800 lg:flex-wrap">
      <nav>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-40 ps-5 lg:ps-10 flex-wrap">
          <div className="mt-2 text-center lg:text-left">
            <a href="#" className="text-2xl font-bold text-white">
              Business
            </a>
          </div>
          <div className="flex gap-5 lg:gap-10 mt-3 flex-wrap justify-center lg:justify-start">
            <a href="#" className="text-white">
              Home
            </a>
            <a href="#" className="text-white">
              Services
            </a>
            <a href="#" className="text-white">
              Portfolio
            </a>
            <a href="#" className="text-white">
              Pricing
            </a>
            <a href="#" className="text-white">
              Team
            </a>
            <a href="#" className="text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 ps-5 lg:ps-10 pb-10 lg:pb-24 gap-8">
        <div className="pt-10 lg:pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Corporate & Business Site Template By Ayro UI.
          </h1>
          <p className="mt-5 text-white text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quam qui sequi quod sunt expedita maiores quae.
          </p>
          <div className="flex mt-5 flex-col sm:flex-row">
            <button className="bg-white border-black btn rounded py-2 px-5 text-sky-800 mb-3 sm:mb-0">
              GET STARTED
            </button>
            <div className="ps-0 sm:ps-3 text-center sm:text-left">
              <img src="" alt="" />
              <p className="mt-2 text-white">Watch Intro</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src={img}
            alt=""
            className="rounded w-[80%] md:w-[60%] lg:w-[500px] h-auto"
          />
        </div>
      </div>

      <div className="bg-white ps-5 lg:ps-20 pt-10 lg:pt-20 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex justify-center lg:justify-start">
          <img
            src={img}
            alt=""
            className="rounded w-[90%] lg:w-auto h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-lg font-bold">OUR STORY</h1>
          <h2 className="pt-5 text-base lg:text-lg">
            Our team comes with the experience and knowledge
          </h2>
          <div className="bg-slate-200 flex flex-wrap p-3 w-full lg:w-8/12 h-14 mt-5 rounded gap-3">
            <button className="bg-blue-500 text-white py-1 px-3 rounded">
              Who We Are
            </button>
            <button className="bg-white py-1 px-3 rounded">Our Vision</button>
            <button className="bg-white py-1 px-3 rounded">Our History</button>
          </div>
          <p className="mt-5 text-sm lg:text-base">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, in
            perferendis culpa magni, delectus necessitatibus excepturi fugiat
            natus, eligendi quibusdam facilis dolor ullam hic perspiciatis totam
            dolore obcaecati repellat eos.
          </p>
        </div>
      </div>
    </div>
  );
};
