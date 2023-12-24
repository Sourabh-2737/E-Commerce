import React, { useEffect } from "react";
import { SiShopify } from "react-icons/si";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/Slices/cartSlice";

const Nav = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCartItems())
  }, [dispatch])
  
  const number = useSelector((state) => state.cart?.number || 0);
  return (
    <div className="bg-black text-white flex flex-row justify-between p-4 px-8">
      <div className="inline">
        <Link to={'/'}>
        <button className="text-2xl font-extrabold cursor-pointer">GroFlex</button>
        </Link>
      </div>
      <div className="flex flex-row gap-x-8">
        <Link to={'/shop'}>
        <div className="cursor-pointer">
          <span className="text-2xl font-extrabold">Shop</span>
          <SiShopify className="inline mx-2 mb-1" size={'1.4rem'} />
        </div>
        </Link>
        <Link to={'/cart'}>
        <div className="cursor-pointer">
          <span className="text-2xl font-extrabold">Cart</span>
          <FaCartShopping className="inline mx-2 mb-1" size={'1.4rem'} />
          <div className="bg-red-800 text-white px-2 rounded-full absolute top-3 right-4">{number}</div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
