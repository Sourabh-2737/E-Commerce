import React, { useEffect, useState } from 'react'
import Loader from "./Loader";
import ItemCard from './ItemCard';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, setEdit } from '../Redux/Slices/productSlice';
import { toast } from 'react-toastify';

const Shop = () => {
  const dispatch = useDispatch()

  const [showForm, setShowForm] = useState(false)
  const edit = useSelector((state) => state.product.edit)
  const singleProduct = useSelector((state) => state.product.singleProduct)
  const initialState = {
    title : '',
    brand : '',
    price : '',
    images : ''
  }
  const [form, setForm] = useState(initialState)

  const handleInputChange = (e) =>{
    const {name, value} = e.target
    setForm({...form, [name] : value})
  }

  const limit = JSON.parse(localStorage.getItem('limit'))
  const IncreaseLimit = () =>{
    localStorage.setItem('limit', JSON.stringify(JSON.parse(localStorage.getItem('limit')) + 1))
    localStorage.setItem(`${JSON.parse(localStorage.getItem('limit'))}`, '0')
  }
  useEffect(() => {
    if(edit){
      setShowForm(true)
      setForm(singleProduct)
    }
  }, [edit])
  

  const newProduct = () =>{
    for(const field in form){
      if(form[field] === ''){
        toast.error("Please enter the fields in the form.", {
          position: "top-center",
          autoClose: 3000,
          className : 'font-bold text-md text-black'
        });
        return
      }
    }
    setForm(initialState)
    setShowForm(false)
    if(edit){
      dispatch(editProduct(form))
      dispatch(setEdit(false))
    }
    else{
      IncreaseLimit();
    dispatch(addProduct(form))
    }
  }
  
  const data = useSelector((state) => state.product.data)
  
  console.log(data);
  return (
    <>
    <div className='flex flex-col gap-4 justify-center lg:max-w-[60%] max-w-fit max-h-fit m-auto mt-4 p-8'>
      <h1 className='text-3xl font-extrabold text-center text-black'>Shop With GroFlex!!!</h1>
      <h3 className='text-2xl font-semibold text-center text-black'>Choose your favourite item form the shopping list & add to cart</h3>
    </div>
    <div className='flex flex-row gap-4 justify-center lg:max-w-[60%] max-w-fit max-h-fit m-auto p-8'>
      <button onClick={() => setShowForm(true)} className='font-bold text-white bg-green-500 hover:bg-green-600 transition-all duration-300 rounded-lg py-2 px-8'>Add Product</button>
    </div>
    {
      showForm && (
        <div className='flex flex-col'>
          <div className='flex flex-row flex-wrap gap-4 justify-center mx-4'>
            <input autoComplete='off' className='md:w-1/3 w-full rounded-lg p-2 border border-black' type="text" name="title" id="title" value={form.title} onChange={handleInputChange} placeholder='Product Name' />
            <input autoComplete='off' className='md:w-1/3 w-full rounded-lg p-2 border border-black' type="text" name="brand" id="brand" value={form.brand} onChange={handleInputChange} placeholder='Product Brand' />
            <input autoComplete='off' className='md:w-1/3 w-full rounded-lg p-2 border border-black' type="number" name="price" id="price" value={form.price} onChange={handleInputChange} placeholder='Product Price' />
            <input autoComplete='off' className='md:w-1/3 w-full rounded-lg p-2 border border-black' type="text" name="images" id="images" value={form.images} onChange={handleInputChange} placeholder='Product Image Link' />
          </div>
          <div className='flex flex-row gap-4 justify-center lg:max-w-[60%] max-w-fit max-h-fit m-auto p-8'>
            <button onClick={() => newProduct()} className='font-bold text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg py-2 px-8'>Save Product</button>
            <button onClick={() => {
              setShowForm(false)
              dispatch(setEdit(false))
            }} className='font-bold text-black border border-black bg-white hover:bg-gray-100 transition-all duration-300 rounded-lg py-2 px-8'>Cancel</button>
          </div>
        </div>
      )
    }
        <div className='flex flex-row flex-wrap gap-6 justify-center px-12 py-4 mx-4'>
          {data?.map((item) => (
            <ItemCard key={item.id} url={item.images} name={item.title} price={item.price} id={item.id} />
          ))}
        </div>
  </>
  )
}

export default Shop
