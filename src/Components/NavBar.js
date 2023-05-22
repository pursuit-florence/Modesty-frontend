
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link to="/">
        <Nav.Link href="#features">Modest-apparel</Nav.Link>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">

          <Link to="/category/woman">
          <Nav.Link href="#features">Women</Nav.Link>
        </Link>
        
        
        <Link to="/category/men">
            <Nav.Link href="#pricing">Men</Nav.Link>
            </Link>

            <Link to="/category/kids">
            <Nav.Link href="#pricing">Kids</Nav.Link>
            </Link>

            
            <NavDropdown title="Registration" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">

            
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sign in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
               
              </NavDropdown.Item>
            </NavDropdown> 
          </Nav>
          <Nav>
          <Link  to="/category/:categoryId/products/new">
            <Nav.Link href="#deets">New product</Nav.Link>
            </Link>
            <Nav.Link eventKey={2} href="#memes">
             New category
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            </Form>
      </Container>
      
    </Navbar>
    
  );
}

export default NavBar;


// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// export default function NavBar() {
//   return (
   
//       <Nav>
    
//       <Link to="/"><h1><span>Home</span></h1></Link>
//      <br/>
     
//       {/* <Link to="/category"><h1><span>Category</span></h1></Link> */}

//       <br/>
      
      
//        <Link to="/category/woman"><h1><span>Woman</span></h1></Link>
//         <br/>
//       <Link to="/category/men"><h1><span>Men</span></h1></Link>
//       <br/>
//       <Link to="/category/kids"><h1><span>Kids</span></h1></Link>
//       <Link  to="/category/new"><h1><span>New Category</span></h1></Link>
//       <br/>
//       <Link  to="/category/:categoryId/products/new"><h1><span>New Product</span></h1></Link>
//       <br/>
    
//     </Nav>
//   );
// }