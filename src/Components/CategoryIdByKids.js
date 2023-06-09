import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const API = process.env.REACT_APP_API_URL;

function Products() {
  const [products, setProducts] = useState([]);
  const categoryId = 3;

  useEffect(() => {
    axios
      .get(`${API}/category/${categoryId}/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [categoryId]);

  const handleDelete = (productId) => {
    axios
      .delete(`${API}/category/${categoryId}/products/${productId}`)
      .then((response) => {
        // Filter out the deleted product from the products array
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
    
          {products.map((product) => (
            <Product key={product.id} product={product} onDelete={handleDelete} />
          ))}
        {/* </tbody>
      </table> */}
    </div>
  );
}

export default Products;
