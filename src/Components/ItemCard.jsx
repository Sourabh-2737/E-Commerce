import React from "react";
import { useDispatch } from "react-redux";
import { getArray, getCartItems } from "../Redux/Slices/cartSlice";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa"
import { deleteProduct, getSingleProduct, setEdit, setLoading } from "../Redux/Slices/productSlice";

const ItemCard = ({ url, name, price, id }) => {
  const dispatch = useDispatch();
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${url})`,
  };
  let cartInfo = {};
  for (let i = 1; i <= localStorage.length; i++) {
    cartInfo[i] = JSON.parse(localStorage.getItem(`${i}`));
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(isNaN(value) || value < 0){
      toast.error("Please enter a valid quantity!!", {
        position: "top-center",
        autoClose: 3000,
        className : 'font-bold text-md text-black'
      });
      return
    }
    else{
      cartInfo[name] =
      Number(value) + Number(JSON.parse(localStorage.getItem(`${name}`)));
    }
  };
  const editProduct = () =>{
    dispatch(setEdit(true))
    dispatch(getSingleProduct(id))
  }
  

  const handleSubmit = (id) => {
      localStorage.setItem(`${id}`, JSON.stringify(cartInfo[id]));
      toast.success("Item added in cart", {
        position: "top-center",
        autoClose: 3000,
        className : 'font-bold text-md text-black'
      });
      dispatch(getArray())
  };

  return (
    <div className="flex flex-col p-2 gap-y-1 border-2 border-gray-500 shadow-lg shadow-gray-600 hover:scale-105 transition-all duration-500 cursor-pointer max-w-fit rounded-lg">
      <div className="flex flex-row absolute bg-white rounded-lg bg-opacity-70 bg border border-gray-400 gap-1 p-2">
      <FaEdit onClick={editProduct} className="text-blue-500 hover:text-blue-700 transition-all duration-200" size={'1.4rem'} />
      <MdDelete onClick={() => {
        dispatch(deleteProduct(id))
        localStorage.removeItem(`${id}`)
        dispatch(getArray())
      }} className="text-red-400 hover:text-red-700 transition-all duration-200" size={'1.4rem'} />
      </div>
      <div
        style={cardStyle}
        className="inline max-w-full bg-cover border border-gray-500 h-[12rem] px-20 py-10 rounded-lg"
      ></div>
      <div className="flex flex-row justify-between text-center">
        <div className="flex flex-col p-4">
          <span className="text-black font-bold text-2xl">Name</span>
          <span className="font-semibold text-xl">
            {name.length > 10 ? name.substring(0, 10) + ".." : name}
          </span>
        </div>
        <div className="flex flex-col p-4">
          <span className="text-black font-bold text-2xl">Price</span>
          <span className="font-semibold text-xl">${price}</span>
        </div>
      </div>
      <div className="flex flex-row justify-evenly gap-x-2 text-center">
        <div className="inline">
          <input
            type="text"
            autoComplete="off"
            name={id}
            id={id}
            onChange={handleInputChange}
            className="p-2 border border-gray-400 rounded-lg"
            placeholder="Qty."
          />
        </div>
        <button
          onClick={() => handleSubmit(id)}
          className="bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 px-3 py-1 rounded-lg"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
