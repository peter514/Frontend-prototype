// components imports
import NavbarComponent from '../Components/NaviagtionBar/NavbarComponent'
import CarouselComponent from '../Components/CarouselComponent';
import Slider from '../Components/Slider';
import Cards from '../Components/Cards'
function HomePage(){
    return(
        <div className='bg-gray-100 h-screen'> 
            
            {/* nav bar */}
          <NavbarComponent/>

          {/* hero section */}
          <CarouselComponent/>

          {/* slider section */}
          <Slider/>

          {/* cards section */}
         <Cards/>         
        </div>
    )
}
export default HomePage;