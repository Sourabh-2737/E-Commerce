import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux/Slices/productSlice";
import Loader from "./Loader";
import { addItem, deleteItem, getArray } from "../Redux/Slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    let limit = JSON.parse(localStorage.getItem('limit'))
    if(limit > 0){
      dispatch(fetchProducts());
    }
    dispatch(getArray())
  }, [dispatch]);
  const loading = useSelector((state) => state.product.loading);
  const data = useSelector((state) => state.product.data);
  const cartItems = useSelector((state) => state.cart.array)
  console.log(cartItems);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col gap-7 m-4 px-8">
          <span className="text-center text-4xl text-black font-extrabold underline">
            My Cart ({cartItems?.length} items)
          </span>
          <div className="border border-t-black border-b-black border-x-transparent text-xl ">
            <div>
              {cartItems?.map((item) => {
                return (
                  <div className="flex flex-row justify-around flex-wrap">
                    <div className="flex gap-6 my-6 md:w-[55%] lg:w-[50%] w-full">
                      <div
                        style={{
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${
                            data[item.id - 1].images
                          })`,
                        }}
                        className="bg-cover border border-gray-500 w-[7rem] h-[8rem] px-20 py-10 rounded-lg"
                      ></div>
                      <div className="flex flex-col self-center flex-wrap">
                        <span className="font-bold text-xl">
                          Name : {data[item.id - 1].title}
                        </span>
                        <span className="font-medium text-lg">
                          Brand : {data[item.id - 1].brand}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-6 my-6 md:w-[50%] w-full self-center justify-between">
                      <span className="font-bold text-lg">
                        Price : {data[item.id - 1].price}
                      </span>
                      <div className="flex flex-row border border-gray-500 bg-gray-300 gap-x-3 px-1 rounded-lg">
                        <button
                          className="hover:font-bold transition-all duration-300"
                          onClick={() => {
                            dispatch(deleteItem(item.id))
                            dispatch(getArray())
                          }}
                        >
                          -
                        </button>
                        <span>
                          {item.quantity}
                        </span>
                        <button className="hover:font-bold transition-all duration-300" onClick={() => {
                            dispatch(addItem(item.id))
                            dispatch(getArray())
                          }}>
                          +
                        </button>
                      </div>
                      <span className="font-bold text-lg">
                        Total :{" "}
                        {data[item.id - 1].price *
                          JSON.parse(localStorage.getItem(`${item.id}`))}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;