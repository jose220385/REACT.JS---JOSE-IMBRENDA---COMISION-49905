import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css"
import CartWidget from "./CartWidget";

const NavBar = () => {
    const cambioFuente =()=>{

    }
  return (
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary otrosEstilos">
    <Container>
      <Navbar.Brand href="#home" className="links">Papelera Royal Plast</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features" className="links">Quiénes Somos</Nav.Link>
          <Nav.Link href="#pricing" className="links">Dónde estamos</Nav.Link>
          <NavDropdown title={"Productos"} id="collasible-nav-dropdown" className="links">
            <NavDropdown title="Aluminio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Rollos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Bandejas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Moldes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Otros</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Aluminio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Rollos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Bandejas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Moldes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Otros</NavDropdown.Item>
            </NavDropdown>
            
          </NavDropdown>
        </Nav>
        <Nav>
          <CartWidget/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
};

export default NavBar;
