import { Button, Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CarouselSlide from "./Carousel";
import  Cards  from './entryCard';


const Home = () => {


    return(
        <div className="home">
            <Container>
                <Row>
                    <Col>                       
                        <CarouselSlide />
                    </Col>
                    <Col>                       
                        <Cards />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;