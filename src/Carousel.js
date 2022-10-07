import { Carousel, CarouselItem } from "react-bootstrap";
import cat1 from "../src/sample_photos/cat1.jpg"
const CarouselSlide = () => {

    return(
        <Carousel fade>
            <CarouselItem>
                <img 
                    className="d-block w-100"
                    src= {cat1} />
            </CarouselItem>
        </Carousel>
    );

}

export default CarouselSlide;