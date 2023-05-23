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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/category/woman" className="nav-link">
              Women
            </Link>
            <Link to="/category/men" className="nav-link">
              Men
            </Link>
            <Link to="/category/kids" className="nav-link">
              Kids
            </Link>
            <Link to="/" className="nav-link">
              Modest-apparel
            </Link>
            <NavDropdown title="Registration" id="collasible-nav-dropdown">
              <NavDropdown.Item>Sign up</NavDropdown.Item>
              <NavDropdown.Item>Sign in</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                {/* Other options */}
              </NavDropdown.Item>
            </NavDropdown> 
          </Nav>
          <Nav>
            <Link to="/category/:categoryId/products/new" className="nav-link">
              New product
            </Link>
            <Nav.Link eventKey={2}>
              {/* New category */}
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