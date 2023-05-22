
import Carousel from 'react-bootstrap/Carousel';
 import modesty from "../Images/image.jpeg"
 import CategoryByWomen from "../Components/CategoryIdByWomen";
 import CategoryByMen from "../Components/categoryByMen";
import CategoryByKids from "../Components/CategoryIdByKids";
import ProductDetails from "../Components/ProductDetails"
// export default function Home(){
//   return(
//     <div>  
//       <CategoryByKids/>
//       <CategoryByMen/>
//       <CategoryByWomen/>
     
      {/* <img className="profile-photo" src= {modesty} alt={"Modesty "}/> */}
//     </div>
//   )
// }






function IndividualIntervalsExample({womenproduct,menproduct,kidproduct}) {


  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src= {modesty}
          alt="Women Apparel"
        />

        
        
        <Carousel.Caption>
          <h3>Women Clothings</h3>
          <p>Find all women clothings, shoes and accessories.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={menproduct}
          alt="Men Apparel"
        /> <img
        className="d-block w-100"
        src={womenproduct}
        alt="Men Apparel"
      />
        <Carousel.Caption>
          <h3>Men Clothings</h3>
          <p>Find all men clothings, shoes and accessories.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={menproduct}
          alt="Kids Apparel"
        />
        <Carousel.Caption>
          <h3>Kids clothing</h3>
          <p>
          Find all kids clothings, shoes and accessories.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;