import React from 'react'
import { FaLinkedin, FaGithub, FaHandPointRight  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className='flex flex-col gap-8 justify-center border-4 border-gray-500 shadow-2xl shadow-gray-500 rounded-lg lg:max-w-[60%] max-w-fit max-h-fit m-auto my-4 md:p-16 p-4'>
          <h3 className='text-center font-extrabold text-black text-3xl underline'>Welcome To GroFlex!!</h3>
          <div className='flex flex-col gap-7'>
            <div>
              <div className='flex flex-row gap-2'>
                <FaHandPointRight className='inline my-1' size={'1.2rem'} />
                <h4 className='text-black font-bold text-xl'>About the website</h4>
              </div>
              <p>&#9900; This website provides a list of items for shopping!!!</p>
              <p>&#9900; Select the quantity for the product you like and add them to cart.</p>
              <p>&#9900; Great. Isn't it..!?</p>
            </div>
            <div>
            <div className='flex flex-row gap-2'>
                <FaHandPointRight className='inline my-1' size={'1.2rem'} />
                <h4 className='text-black font-bold text-xl'>Tools & Techniques Used</h4>
              </div>
              <p>&#9900; <span className='text-black font-semibold text-md'>React : </span>For building the website.</p>
              <p>&#9900; <span className='text-black font-semibold text-md'>Tailwind CSS : </span>For Designing.</p>
              <p>&#9900; <span className='text-black font-semibold text-md'>Redux : </span>For managing the cart items.</p>
              <p>&#9900; <span className='text-black font-semibold text-md'>Local Storage : </span>For persisting data on refresh.</p>
            </div>
            <div>
            <div className='flex flex-row gap-2'>
                <FaHandPointRight className='inline my-1' size={'1.2rem'} />
                <h4 className='text-black font-bold text-xl'>Developed by</h4>
              </div>
              <div className='flex flex-row'>
              <p>&#9900; <span className='text-black font-semibold text-md'>Sourabh Singh - </span>Front-end Developer.</p>
              <a href="https://www.linkedin.com/in/sourabh-singh-379a77218" target='_blank'><FaLinkedin className='m-1' size={'1.2rem'} /></a>
              <a href="https://github.com/Sourabh-2737" target='_blank'><FaGithub className='m-1' size={'1.2rem'} /></a>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <Link to={'/shop'}>
            <button className='bg-green-500 text-white font-bold px-5 py-2 hover:bg-green-600 transition-all duration-300 rounded-md cursor-pointer'>Shop Now</button>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Home