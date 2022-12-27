import {React, useState, useEffect} from 'react'
import MainContainer from './MainContainer'
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";
import i5 from "../images/i5.jpg";
import Card from './Card';
import Footer from './Footer';
import CartContainer from './CartContainer';
import { useStateValue } from "../context/StateProvider";

const Container = () => {
  const [{ Items, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);
  return (
    <div className="flex flex-col gap-6">
      <MainContainer />
      {cartShow && <CartContainer />} 
      <div className="flex md:p-2 items-center justify-center bg-white ">
        <div className="text-white">
          <div className="flex flex-row gap-3 md:gap-10 lg:gap-16 md:px-0 lg:px-2 cursor-pointer">
            <img
              src={i1}
              alt="men"
              className="shadow rounded-full w-12 h-12 md:w-40 lg:w-40  md:h-auto align-middle border-none"
            ></img>
            <img
              src={i2}
              alt="men"
              className="shadow rounded-full w-12 h-12 md:w-40 md:h-auto align-middle border-none"
            ></img>
            <img
              src={i3}
              alt="men"
              className="shadow rounded-full w-12 h-12 md:w-40 md:h-auto align-middle border-none"
            ></img>
            <img
              src={i4}
              alt="men"
              className="shadow rounded-full w-12 h-12 md:w-40 md:h-auto align-middle border-none"
            ></img>
            <img
              src={i5}
              alt="men"
              className="shadow rounded-full w-12 h-12 md:w-40 md:h-auto align-middle border-none"
            ></img>
          </div>
        </div>
      </div>
      <br></br>
      <Card />
      <br></br>
      <br></br>
      <Footer />
    </div>
  );
}

export default Container