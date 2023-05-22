import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Product from "./Product";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// import category from "../../../modesty-backend/controllers/categoryController";

const API = process.env.REACT_APP_API_URL;

function Products() {
  let { categoryId } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: 0,
    color: "",
    size: "",
    type: "",
    image_url: "",
    category_id: categoryId
  });
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleCreate = () => {
    axios
      .post(`${API}/category/${categoryId}/products`, newProduct)
      .then((response) => {
        setProducts([...products, response.data]);
        setNewProduct({
          name: "",
          description: "",
          price: 0,
          color: "",
          size: "",
          type: "",
          image_url: ""
        });
        navigate("/"); // Redirect to home page
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate();
  };

  const colorOptions = ["Red", "Blue", "Green", "Yellow", "Black"];
  const sizeOptions = ["Small", "Medium", "Large", "XL", "XXL"];

  return (
    <div className="container">
      <div>
        <h2>Create a New Product</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail" onSubmit={handleSubmit}>
          {/* Form fields */}
          <Form.Label>Name </Form.Label>
          <Form.Text className="text-muted"> type in your name</Form.Text>
          <Form.Control type="text" placeholder="Enter name" />
            
              value={newProduct.name}
              onChange={handleInputChange}
         
            </Form.Group>
         
          <br />
          <Form.Label>
            Description:
            <input
              type="text"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            Price:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            Color:
            <select
              name="color"
              value={newProduct.color}
              onChange={handleInputChange}
            >
              <option value="">Select a color</option>
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </Form.Label>
          <br />
          <Form.Label>
            Size:
            <select
              name="size"
              value={newProduct.size}
              onChange={handleInputChange}
            >
              <option value="">Select a size</option>
              {sizeOptions.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </Form.Label>
          <br />
          <Form.Label>
            Image URL:
            <input
              type="text"
              name="image_url"
              value={newProduct.image_url}
              onChange={handleInputChange}
            />
          </Form.Label>
          <br />
          <Form.Label>
            Type:
            <input
              type="text"
              name="type"
              value={newProduct.type}
              onChange={handleInputChange}
            />
          </Form.Label>
          <br />
          <input type="submit" value="Create" />
        {/* </Form.Group> */}
        </Form>
      </div>
      <div>
        {/* Display products */}
      </div>
    </div>
  );
}

export default Products;