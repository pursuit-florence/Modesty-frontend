
 import Carousel from 'react-bootstrap/Carousel';
 import modesty from "../Images/image.jpeg"
 import CategoryByWomen from "../Components/CategoryIdByWomen";
 import CategoryByMen from "../Components/categoryByMen";
import CategoryByKids from "../Components/CategoryIdByKids";
import Product from "../Components/Product";
// import ProductDetails from "../Components/ProductDetails"
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';


export default function NoTransitionExample({ womenproduct, menproduct, kidproduct }) {
  return (
    <Carousel slide={false} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={womenproduct}
          alt="Women Apparel"
          
        />
      
        <Carousel.Caption>
          <h3>Women Apparel Section</h3>
          <p>This is where you find quality clothing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={menproduct}
          alt="Men Apparel"
        />
        <Carousel.Caption>
          <h3>Men Apparel Section</h3>
          <p>This is where you find quality clothing.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={kidproduct}
          alt="Kids Apparel"
        />
        <Carousel.Caption>
          <h3>Kids Apparel Section</h3>
          <p>This is where you find quality clothing.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   
  );
}


