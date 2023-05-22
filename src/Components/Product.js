import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Product({ product, onDelete }) {
  const [showInfo, setShowInfo] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);

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
    // Implement your delete functionality here
    onDelete(product.id);
    setShowInfo(false);
  };

  return (
    <div>
      {showInfo ? (
        editing ? (
          <div>
            <h1>Edit Product</h1>
            <form>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={editedProduct.name}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Description:
                <input
                  type="text"
                  name="description"
                  value={editedProduct.description}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Price:
                <input
                  type="number"
                  name="price"
                  value={editedProduct.price}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Color:
                <input
                  type="text"
                  name="color"
                  value={editedProduct.color}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Size:
                <input
                  type="text"
                  name="size"
                  value={editedProduct.size}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <label>
                Type:
                <input
                  type="text"
                  name="type"
                  value={editedProduct.type}
                  onChange={handleInputChange}
                />
              </label>
              <br />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </form>
          </div>
        ) : (
          <div>
            <table>
  <tr>
    <th>Product</th>
  </tr>
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
</table>
            <button onClick={toggleEditing}>Edit</button>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )
      ) : (
        <div>
        <Container>
      <Col md={4}>
       <Col>
     
   
      <Row><img src={product.image_url} alt="dress" /></Row>
      <Col xs={6}><button onClick={toggleInfo}>Show Product Information</button></Col>
      </Col>
      </Col>
          </Container>
        </div>
      )}
    </div>
  );
}



// function RowColLayoutColWidthBreakpointExample() {
//   return (
//     <Container>
//       <Row md={4}>
//         <Col>1 of 3</Col>
//         <Col xs={6}>2 of 3</Col>
//         <Col>3 of 3</Col>
//       </Row>
//     </Container>
//   );
// }

// export default RowColLayoutColWidthBreakpointExample;