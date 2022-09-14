import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import product1 from '../images/p1.webp'

function Cards(){
    const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
    return(
        <div className='my-4'> 
            <div><h1 className='font-bold text-2xl text-center'>Products (card)</h1></div>
            <Carousel responsive={responsive} >
            <div>
                <img src={product1} alt="" />
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            </Carousel>;
                        
        </div>
    )
}
export default Cards;