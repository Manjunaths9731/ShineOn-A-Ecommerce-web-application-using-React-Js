import React from 'react'
import fashion from "../images/fashion.png";
const MainContainer = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor items-center justify-center">
          All Your Style<br></br>
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Are Here
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Online Shopping Site for Fashion & Lifestyle in India. India's Fashion
          Expert brings you a variety of footwear, Clothing, Accessories and
          lifestyle products ...
        </p>

        <button
          type="button"
          className="bg-gradient-to-br text-white	font-semibold from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Explore Now
        </button>
      </div>
      <div className="py-2 flex items-center relative">
        <img
          src={fashion}
          className=" ml-auto h-220 w-full lg:w-auto lg:h-450 md:inline hidden"
          alt="hero-bg"
        />
      </div>
    </section>
  );
}

export default MainContainer