import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../images/web5.jpeg'
function CarouselComponent(){
    return(
        <div > 
            <Carousel>
                <div className="bg-">
                    <img src={image1} alt="" />
                    item 1
                </div>
                <div>
                    item 2
                </div>
                <div> item 3</div>
                <div>
                    
                    item 4
                </div>
                <div>
                    item 5
                </div>
            </Carousel>

             
        </div>
    )
}
export default CarouselComponent;;