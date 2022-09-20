import React from 'react';
import Cards from '../Components/Cards';
import CarouselComponent from '../Components/CarouselComponent';
import NavbarComponent from '../Components/NaviagtionBar/NavbarComponent';
import Footer from '../Components/Footer';

export const Preview = () => {
  return (
    <div className='mt-[68px] '>
        <NavbarComponent/>
        <div className=' gap-2 m-2 md:flex md:flex-row'>
            <div className='md:w-7/12'>
                <CarouselComponent/>

            </div>
            <div className=' px-1 md:w-5/12  bg-slate-200'>
                <h1 className='font-bold'>Product Information </h1>
                <hr />
                <p>
                    Architecture Overview is
                     intended to share conceptual overview of how React Native's internals work. The intended audience includes library authors and core contributors. If you are an app developer, it is not a requirement to be familiar with this material to be effective with React Native. You can still benefit from the overview as it will give
                     you insights into how React Native works under the hood
                </p>
                <hr />
                <div className='flex flex-wrap gap-2 justify-evenly items-center my-5 pb-4 '>
                    <button className='bg-primary py-1 px-6 hover:bg-slate-500 hover:cursor-pointer hover:text-gray-200'>Buy Now</button>
                    <button className='bg-primary py-1 px-6 hover:bg-slate-500 hover:cursor-pointer hover:text-gray-200'>Call</button>
                    <button className='bg-primary py-1 px-6 hover:bg-slate-500 hover:cursor-pointer hover:text-gray-200'>Add to Cart</button>
                </div>

            </div>
        </div>
        <hr />
                <div>
                    <h1 className='text-center font-bold text-xl'>More products</h1>
                    <Cards/>
                </div>
                <Footer/>


    </div>
  )
}
export default Preview;