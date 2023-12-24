import React, { useEffect } from 'react'
import Loader from "./Loader";
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/Slices/productSlice';
import { getCartItems } from '../Redux/Slices/cartSlice';

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(getCartItems())
  }, [dispatch])
  
  const loading = useSelector((state) => state.product.loading)
  const data = useSelector((state) => state.product.data)
  return (
    <>
    <div className='flex flex-col gap-4 justify-center lg:max-w-[60%] max-w-fit max-h-fit m-auto my-4 md:p-16 p-8'>
      <h1 className='text-3xl font-extrabold text-center text-black'>Shop With GrowFlex!!!</h1>
      <h3 className='text-2xl font-semibold text-center text-black'>Choose your favourite item form the shopping list & add to cart</h3>
    </div>
    {loading ? (
        <Loader />
      ) : (
        <div className='flex flex-row flex-wrap gap-6 justify-center px-12 py-4 mx-4'>
          {data?.map((item) => (
            <ItemCard key={item.id} url={item.images[0]} name={item.title} price={item.price} id={item.id} />
          ))}
        </div>
      )}
  </>
  )
}

export default Shop
