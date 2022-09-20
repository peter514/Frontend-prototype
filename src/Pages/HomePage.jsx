// components imports
import NavbarComponent from '../Components/NaviagtionBar/NavbarComponent'
import CarouselComponent from '../Components/CarouselComponent';
import Cards from '../Components/Cards'
import Footer from '../Components/Footer';
import HeroSection from '../Components/HeroSection';
function HomePage(){
    return(
        <div className='bg-white h-screen mt-[68px]'> 
            
            {/* nav bar */}
          <NavbarComponent/>

          {/* hero section */}
          <HeroSection/>
                   

          {/* cards and slider  section */}
         <Cards/>  
                {/*Footer  */}
                <Footer/>
        </div>
    )
}
export default HomePage;