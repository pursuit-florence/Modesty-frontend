import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

export default function Product({ product, onDelete }) {
  const [showInfo, setShowInfo] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  const [showImage, setShowImage] = useState([product]);
//how to set id to be able to delete
const id = product.product_id;
console.log(id)

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    // Implement your save functionality here
    console.log('Save button clicked');
    console.log('Edited Product:', editedProduct);
    // Pass the edited product to the parent component
    // so it can handle the saving logic
    setEditing(false);
  };

  const handleCancel = () => {
    // Implement your cancel functionality here
    console.log('Cancel button clicked');
    setEditedProduct(product);
    setEditing(false);
  };

  const handleBack = () => {
    // Close the product information section
    setShowInfo(false);
  };

  const handleDelete = () => {
    onDelete(id);

     setShowInfo(false);
  };

  return (
    <div>
      {showInfo ? (
        editing ? (
          <div>
            <h1>Edit Product</h1>
            <form>
  <div className="form-group">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      className="form-control"
      id="name"
      name="name"
      value={editedProduct.name}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="description">Description:</label>
    <input
      type="text"
      className="form-control"
      id="description"
      name="description"
      value={editedProduct.description}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="price">Price:</label>
    <input
      type="number"
      className="form-control"
      id="price"
      name="price"
      value={editedProduct.price}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="color">Color:</label>
    <input
      type="text"
      className="form-control"
      id="color"
      name="color"
      value={editedProduct.color}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="size">Size:</label>
    <input
      type="text"
      className="form-control"
      id="size"
      name="size"
      value={editedProduct.size}
      onChange={handleInputChange}
    />
  </div>
  <div className="form-group">
    <label htmlFor="type">Type:</label>
    <input
      type="text"
      className="form-control"
      id="type"
      name="type"
      value={editedProduct.type}
      onChange={handleInputChange}
    />
  </div>
  <button className="btn btn-primary" onClick={handleSave}>Save</button>
  <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
</form>
          </div>
        ) : (
          <div>
            <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th>Product</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{editedProduct.name}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{editedProduct.description}</td>
        </tr>
        <tr>
          <td>Price:</td>
          <td>{editedProduct.price}</td>
        </tr>
        <tr>
          <td>Color:</td>
          <td>{editedProduct.color}</td>
        </tr>
        <tr>
          <td>Size:</td>
          <td>{editedProduct.size}</td>
        </tr>
        <tr>
          <td>Type:</td>
          <td>{editedProduct.type}</td>
        </tr>
      </tbody>
    </table>
  
   
      <button className="btn btn-" onClick={toggleEditing}>Edit</button>
      <button className="btn btn-light" onClick={handleBack}>Back</button>
      <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    </div>
        )
      ) : (
        <div class="row row-cols-auto">
        {/* <Container> */}
      {/* <Row> */}
      <Col md={4}>
       {/* <Col> */}
      
       <div className="item">
     <img src={product.image_url} alt="dress" />
    <Button onClick={toggleInfo} variant="secondary">Show Product Information  </Button>{' '}
    {showInfo && (
              <div>
                <h3>Product Name</h3>
                <p>Product description goes here.</p>
              </div>
            )}
          </div>
        </Col>
        <br></br>
        
         </div>
      )}
    </div>
  );
}

