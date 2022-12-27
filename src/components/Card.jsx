import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { mainData } from "../utils/Data";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/Reducer";
const Card = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-2  lg:gap-3 md:gap-3">
      {mainData &&
        mainData.map((n) => (
          <div key={n.id} className="rounded overflow-hidden shadow-lg">
            <img className="h-1/2 w-full" src={n.imageSrc} alt="Mountain"></img>
            <div className="px-3 md:py-4 lg:py-4 sm:py-4 py-2">
              <div className="font-semibold lg:md:sm:font-bold lg:md:sm:text-xl text-xs">
                {n.name}
              </div>
              <p className="text-gray-700 text-xs lg:md:sm:text-sm">{n.decp}</p>
            </div>
            <div className="px-6 lg:md:sm:pt-4">
              <span className="">
                ${n.price}
                <span className="pl-3 text-xs line-through">
                  ${n.price * 3}
                </span>
              </span>
              <br></br>
              <span className="text-xs">
                {Math.floor(Math.random() * (70 - 45) + 45)}% off
              </span>
            </div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md ml-2 mt-0 "
            >
              <MdShoppingBasket
                className="text-white"
                onClick={() => setItems([...cartItems, n])}
              />
            </motion.div>
          </div>
        ))}
    </div>
  );
};

export default Card;
