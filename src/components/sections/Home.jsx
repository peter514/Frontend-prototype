import React from "react";
import Typed from "react-typed"


function Home() {
  return (
    <>
    <div id="home" className="text-white  bg-homeImage bg-cover bg-center bg-no-repeat h-[100vh]  bg-blend-overlay bg-[#071c1f]">
      <div className="block align-middle justify-center items-center md:flex md:justify-between md:pr-10 ">
        <div className="flex gap-4 items-center justify-center md:justify-start p-12 ">
          
          <div className="flex flex-col ">
            <span className="font-semibold text-xs pl-4">Get Support</span>
            <span className="font-bold text-md md:text-xl pl-4">
              buildersafrica@gmail.com
            </span>
          </div>
        </div>

        
      </div>
      <div>
        <h1 className="xs:text-md text-4xl md:text-7xl  pt-[60px] text-center font-bold ">
          Builders Africa
        </h1>
        <div className="flex flex-row gap-3 justify-center px-2 pt-6 lg:text-xl md:text-md xs:text-xs">
          <Typed
          className="font-bold"
          strings={
            [
              "Build With Confidence",
              "Simple, Transparent and Easy to Use"
              
            ]
            
          }
                    typeSpeed={150}
                    backSpeed={100}
                    loop
           >
            
          </Typed>
          
          
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Home;