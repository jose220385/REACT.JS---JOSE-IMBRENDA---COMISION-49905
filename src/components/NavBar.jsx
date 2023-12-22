import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useGetProductsInfo } from "../hooks/useGetProductsInfo";
import { useGetCategories } from "../hooks/useGetCategories";
useGetCategories

const NavBar = () => {
  const url = new URL(
    'https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/category'
  );
  const { categories } = useGetCategories(url);
  console.log(categories);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary otrosEstilos"
    >
      <Container>
        
          <Navbar.Brand ><Link className="links" to={"/"}>Papelera Royal Plast</Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="links">Quiénes Somos</Nav.Link>
            <Nav.Link className="links">Dónde estamos</Nav.Link>
            <NavDropdown
              title={"Productos"}
              id="collasible-nav-dropdown"
              className="links"
              style={{ color: "white" }}
            >
              {categories.map((category) => {
                return (
                  <NavDropdown.Item key={category.id} >
                    <Link to={`/category/${category.name}`} className="black">
                      {category.name}
                    </Link>
                  </NavDropdown.Item> 
                );
              })} 
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
