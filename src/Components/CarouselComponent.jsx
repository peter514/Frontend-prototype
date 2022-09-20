import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/web 8.jpeg'
import image2 from '../images/web 1.jpeg'
import image3 from '../images/web 2.jpeg'
import image4 from '../images/web 3.jpeg'
import image5 from '../images/web 4.jpeg'
function CarouselComponent(){
    return(
        <div className=" "> 
            <Carousel  autoPlay infiniteLoop useKeyboardArrows className= ''>
                <div className=" ">
                   <img src={image1} alt="" className=" " />
                </div>
                <div>
                    <img src={image2} alt="" className="" />
                </div>
                <div>
                    <img src={image3} alt="" className=" " />
                </div>
                <div>
                    <img src={image4} alt="" className= " " />
                </div>
                <div>
                   <img src={image5} alt="" className=" " />
                </div>
            </Carousel>

             
        </div>
    )
}
export default CarouselComponent;;