import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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
    category: ""
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
          image_url: "",
       
        });
        navigate("/category/woman"); // Redirect to home page
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate();
  };

  const colorOptions = ["women", "men", "kids"];
  const sizeOptions = ["Small", "Medium", "Large", "XL", "XXL"];
  const typeOptions = ["women", "men", "kids"];
  
  return (
    <div className="container">
      <div>
        <h2>Create a New Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
            
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={newProduct.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="color" className="form-label">
              Category:
            </label>
            <select
              className="form-select"
              id="color"
              name="color"
              value={newProduct.color}
              onChange={handleInputChange}
            >
              <option value="">Category</option>
              {colorOptions.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="size" className="form-label">
              Size:
            </label>
            <select
              className="form-select"
              id="size"
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
          </div>
          <div className="mb-3">
            <label htmlFor="image_url" className="form-label">
              Image URL:
            </label>
            <input
              type="text"
              className="form-control"
              id="image_url"
              name="image_url"
              value={newProduct.image_url}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type:
            </label>
            <input
              type="text"
              className="form-control"
              id="type"
              name="type"
              value={newProduct.type}
              onChange={handleInputChange}
            />
          </div>
          <Link to={"/"}>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
          </Link>
        </form>
      </div>
      <div>
        {/* Display products */}
      </div>
    </div>
  );
}

export default Products;