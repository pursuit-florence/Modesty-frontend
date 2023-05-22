
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Home from "../Pages/Home";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] =  useState([]);
  const [kidProducts, setKidProducts] =  useState([]);
  const categoryId = 1
  const category_Id = 2
  const categoryid = 3
 

  useEffect(() => {
    axios
      .get(`${API}/category/${categoryId}/products`)
      .then((response) => {
        console.log(response.data)
        setWomenProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [categoryId]);

  useEffect(() => {
    axios
      .get(`${API}/category/${category_Id}/products`)
      .then((response) => {
        console.log(response.data)
        setMenProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [category_Id]);
  useEffect(() => {
    axios
      .get(`${API}/category/${categoryid}/products`)
      .then((response) => {
        console.log(response.data)
        setKidProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [categoryid]);
  return (
    <div className="container">
      
          {womenProducts.map((womenproduct) => (
            <Home key={womenproduct.womenproduct_id} womenproduct={womenproduct.image_url}  />
         
            
          ))}
    {/* <div className="container"> */}
      
      {menProducts.map((menproduct) => (
        <Home key={menproduct.menproduct_id} menproduct={menproduct.image_url}  />
     
        
      ))}


      
      {kidProducts.map((kidproduct) => (
     <Home key={kidproduct.kidproduct_id} kidproduct={kidproduct.image_url}  />
     
        
      ))}
    </div>

  
  );

  
}

export default Products;
