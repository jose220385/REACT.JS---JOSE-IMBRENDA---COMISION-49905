import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css"
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { useGetProductsInfo } from "../hooks/useGetProductsInfo";

const NavBar = () => {
   
  const url = new URL(
    "https://6580ac733dfdd1b11c41efc7.mockapi.io/royalplast/category"
  );
  const { productsData } = useGetProductsInfo(url);
  
console.log(productsData)

  return (
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary otrosEstilos">
    <Container>
      <Link to={'/'}></Link><Navbar.Brand href="/" className="links">Papelera Royal Plast</Navbar.Brand><Link/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features" className="links">Quiénes Somos</Nav.Link>
          <Nav.Link href="#pricing" className="links">Dónde estamos</Nav.Link>
          <NavDropdown title={"Productos"} id="collasible-nav-dropdown" className="links" style={{color:"white"}}>
            {
              productsData.map(category =>{
                return(
                  <NavDropdown key= {category.id} title={category.title} id="collasible-nav-dropdown" style={{color:"white"}}>
                  {
                    category.subCategory.map(subCategory =>{
                      return (
                      <NavDropdown.Item key={subCategory.id} className="black"><Link to={`/category/${category.title}/${subCategory.title}`} ></Link>{subCategory.title}</NavDropdown.Item>
              )})}
                  </NavDropdown>
                )
              })
            }
            
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
