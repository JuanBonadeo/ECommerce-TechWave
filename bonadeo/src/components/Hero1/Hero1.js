import '../Hero1/Hero1.css'
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Buttons/Buttons/Buttons'
const Hero1 = () =>{
    return(
        // <div className="Hero1Container">
        //     <h2>Lo mejor en tecnologia
        //         de las mejores marcas.</h2>
        // </div>
        <Carousel>
        <Carousel.Item className='Hero1Container'>
          <img
            className="d-block w-100"
            src="https://www.androidauthority.com/wp-content/uploads/2022/12/EoY-2022-Best-Phones-on-leather.jpg?text=First slide&bg=373940"
            alt="First slide"
          />
          <Carousel.Caption className='HeroCaption HeroCaption1'>
            <h3>Los mejores smartphones</h3>
            <Button label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='Hero1Container'>
          <img
            className="d-block w-100"
            src="https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ada/rtx-4090/geforce-rtx-4090-100vp-d.jpg?text=First slide&bg=373940"
            alt="Second slide"
          />
  
          <Carousel.Caption className='HeroCaption HeroCaption2'>
            <h3>GeForce RTX Serie 40</h3>
            <Button label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='Hero1Container'>
          <img
            className="d-block w-100"
            src="https://assets2.razerzone.com/images/og-image/pc-accessories-category-OGimage.jpg?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption className='HeroCaption HeroCaption2'>
            <h3>RAZER PC Accesories</h3>
            <Button label="Ver Mas"></Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
}
export default Hero1