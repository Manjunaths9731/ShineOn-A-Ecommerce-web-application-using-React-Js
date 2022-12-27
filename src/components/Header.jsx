import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import { motion } from "framer-motion";
import { HiOutlineShoppingBag } from "react-icons/hi";
import {CgProfile} from 'react-icons/cg';
import { MdOutlineFavoriteBorder, MdMenu, MdSearch } from "react-icons/md";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/Reducer';
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const [isMenuItems, setisMenuItems] = useState(false);

  

  const login = async () => {
    console.log(provider);
    if(!user){
      const {user:{providerData},} = await signInWithPopup(firebaseAuth,provider);
      dispatch({
        type:actionType.SET_USER,
        user:providerData[0]
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }else{
        setIsMenu(!isMenu);
    }
    }

    const logout = () => {
      setIsMenu(false);
      localStorage.clear();

      dispatch({
        type: actionType.SET_USER,
        user: null,
      });
    };

    const menu = () => {
      setisMenuItems(!isMenuItems);
    }

    const showCart = () => {
      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      });
    };
  return (
    <header className="fixed z-50 w-screen md:px-8 lg:px-14 bg-orange-400">
      <div className="hidden md:flex w-full h-full">
        <Link className="flex flex-col items-center gap-0 pt-3 md:pt-4">
          <img src={Logo} className="w-12 object-cover" alt="logo" />
          <p className="text-white text-xs font-semibold">Shine On</p>
        </Link>
        <div className="flex items-center gap-8 md:gap-6 lg:gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-7 lg:gap-8 md:gap-6 lg:pl-10 md:pl-6 pt-5"
          >
            <div className="pb-6 p-3 border-b-4 border-orange-400 hover:border-b-white">
              <li className="text-white font-bold cursor-pointer transition-all duration-100 ease-in-out ">
                Home
              </li>
            </div>
            <div className="pb-6 p-3 border-b-4 border-orange-400 hover:border-b-white">
              <li className="text-white font-semibold cursor-pointer transition-all duration-100 ease-in-out">
                Men
              </li>
            </div>
            <div className="pb-6 p-3 border-b-4 border-orange-400 hover:border-b-white">
              <li className="text-white font-semibold cursor-pointer transition-all duration-100 ease-in-out">
                Women
              </li>
            </div>
            <div className="pb-6 p-3 border-b-4 border-orange-400 hover:border-b-white">
              <li className="text-white font-semibold cursor-pointer transition-all duration-100 ease-in-out">
                Kids
              </li>
            </div>
            <div className="pb-6 p-3 border-b-4 border-orange-400 hover:border-b-white">
              <li className="text-white font-semibold cursor-pointer transition-all duration-100 ease-in-out">
                Beauty
              </li>
            </div>
          </motion.ul>

          <div className="max-w-md p-2 mx-auto pt-2.5">
            <div className="relative flex items-center w-full h-12 lg:h-10 lg:w-full md:h-9 md:w-40 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <MdSearch className="text-4xl" />
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                placeholder="Search something.."
              />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="flex pl-16 gap-12 lg:gap-12 lg:right-0 md:gap-8 md:pl-8 lg:pl-12 items-center"
        >
          <div className="flex flex-col gap-0 ">
            <MdOutlineFavoriteBorder className="text-white text-3xl lg:text-3xl md:text-2xl cursor-pointer" />
            <span className="text-xs text-white">Wishlist</span>
          </div>
          <div className="flex flex-col gap-0 ">
            <HiOutlineShoppingBag
              className="text-white text-3xl lg:text-3xl md:text-2xl  cursor-pointer "
              onClick={showCart}
            />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
            <span className="text-xs text-white">Cart</span>
          </div>
          <div className="flex flex-col gap-0 ">
            <CgProfile
              className="text-white text-3xl md:text-2xl lg:text-3xl cursor-pointer "
              onClick={login}
            />
            <span className="text-xs text-white">Profile</span>
          </div>
        </motion.div>
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-20 absolute bg-gray-50 shadow-xl rounded-lg flex flex-col top-16 right-14"
          >
            <Link>
              <p
                className="px-4 py-2 text-sm flex items-center cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor"
                onClick={logout}
              >
                Logout
              </p>
            </Link>
          </motion.div>
        )}
      </div>

      {/* mobile */}
      <div className="flex items-center px-2 py-1 justify-between md:hidden w-full h-full ">
        <div className="relative flex items-center justify-center gap-6">
          <MdMenu
            className="text-textColor text-3xl  cursor-pointer"
            onClick={menu}
          />
          {isMenuItems && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-10 left-0"
            >
              <ul className="flex flex-col ">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Men
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Women
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Kids
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Beauty
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2">
                  Home & Living
                </li>
              </ul>
            </motion.div>
          )}
          <Link to={"/"} className="flex flex-col items-center gap-0">
            <img src={Logo} className="w-8 object-cover" alt="logo" />
            <p className="text-headingColor text-xs">Shine On</p>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex pl-16 gap-6 items-center justify-center right-0"
        >
          <div className="flex flex-col gap-0 ">
            <MdOutlineFavoriteBorder className="text-textColor text-2xl cursor-pointer" />
          </div>
          <div className="flex flex-col gap-0 ">
            <HiOutlineShoppingBag className="text-textColor text-2xl  cursor-pointer "
              onClick={showCart} />
            {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
            )}
          </div>
          <div className="flex flex-col gap-0 ">
            <CgProfile
              className="text-textColor text-2xl  cursor-pointer "
              onClick={login}
            />
          </div>
        </motion.div>
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-20 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-11 right-0"
          >
            <Link>
              <p
                onClick={logout}
                className="px-4 py-2 text-sm flex items-center cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor"
              >
                Logout
              </p>
            </Link>
          </motion.div>
        )}
      </div>
    </header>
  );
}

export default Header;