import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import product1 from '../images/p1.webp'
import p2 from '../images/p2.webp'
import p3 from '../images/p3.jpeg'
import p4 from '../images/p4.jpeg'
import p5 from '../images/p5.jpeg'

export const HeroSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <Carousel
      autoPlay
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      className=" m-2 bg-white"
    >
      <div className="bg-h1 h-[450px] bg-cover bg-repeat-none flex flex-col justify-center  items-center">
        
        <h1 className="text-center text-white font-bold text-[70px] bg-primary opacity-60">DevOps Solutions</h1>
      </div>
      <div className="bg-h2 h-[450px] bg-cover bg-repeat-none flex flex-col justify-center  items-center">
        
        <h1 className="text-center text-white font-bold text-[70px] bg-primary opacity-60">Frontend Dev</h1>
      </div>
      <div className="bg-h3 h-[450px] bg-cover bg-repeat-none flex flex-col justify-center  items-center">
        
        <h1 className="text-center text-white font-bold text-[70px] bg-primary opacity-60">SEO Operations</h1>
      </div>
      <div className="bg-h4 h-[450px] bg-cover bg-repeat-none flex flex-col justify-center  items-center">
        
        <h1 className="text-center text-white font-bold text-[70px] bg-primary opacity-60">DevOps Solutions</h1>
      </div>
      <div className="bg-h5 h-[450px] bg-cover bg-repeat-none flex flex-col justify-center  items-center">
        
        <h1 className="text-center text-white font-bold text-[70px] bg-primary opacity-60">Data Solutions</h1>
      </div>
    </Carousel>
  )
}
export default HeroSection
