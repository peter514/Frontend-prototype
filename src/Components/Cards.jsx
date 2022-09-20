import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import product1 from '../images/p1.webp'
import p2 from '../images/p2.webp'
import p3 from '../images/p3.jpeg'
import p4 from '../images/p4.jpeg'
import p5 from '../images/p5.jpeg'
import { GrCart } from 'react-icons/gr'


function Cards() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
 
  return (
    <div className="">
      <div>
        <h1 className="font-bold text-2xl text-center">Products (card)</h1>
      </div>
      <Carousel autoPlay autoPlaySpeed={5000} infinite   responsive={responsive} className=" m-2 bg-white">
        <div className="bg-gray-100 drop-shadow-2xl m-2 p-1 ">
          <img src={product1} alt="" className="h-[238px] w-full" />
          <div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> IPhone 14 pro - $1000/</p>
              <h1 className="hover:bg-primary p-2 rounded-md ">
                <GrCart size={32} />
              </h1>
            </div>
            <p className="">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Order Now
              </button>
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 drop-shadow-2xl m-2 p-1 ">
          <img src={p2} alt="" className="h-[238px] w-full" />
          <div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Dell Lattitude 1630- $1000/</p>
              <h1 className="hover:bg-primary p-2 rounded-md ">
                <GrCart size={32} />
              </h1>
            </div>
            <p className="">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Order Now
              </button>
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 drop-shadow-2xl m-2 p-1 ">
          <img src={p3} alt="" className="h-[238px] w-full" />
          <div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Hp probook - $1000/</p>
              <h1 className="hover:bg-primary p-2 rounded-md ">
                <GrCart size={32} />
              </h1>
            </div>
            <p className="">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Order Now
              </button>
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 drop-shadow-2xl m-2 p-1 ">
          <img src={p4} alt="image" className="h-[238px] w-full" />
          <div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> IPhone 14 pro - $1000/</p>
              <h1 className="hover:bg-primary p-2 rounded-md ">
                <GrCart size={32} />
              </h1>
            </div>
            <p className="">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Order Now
              </button>
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 drop-shadow-2xl m-2 p-1 ">
          <img src={p5} alt="image" className="h-[238px] w-full" />
          <div>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> HeadPhone - $50/</p>
              <h1 className="hover:bg-primary p-2 rounded-md ">
                <GrCart size={32} />
              </h1>
            </div>
            <p className="">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Order Now
              </button>
              <button className="bg-primary p-2 text-black rounded-sm hover:bg-slate-400 hover:text-white hover:scale-110 hover:ease-out duration-120 ">
                Details
              </button>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}
export default Cards
