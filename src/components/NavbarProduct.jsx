import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import transparente from "../assets/transparente.png";
import Scroll from "./scroll";
import "../styles/Navbar.css";

const HeaderProduct = (props) => {
  return (
    <div className="Header">
       <Scroll />
      <Navbar className="navbar-custom" expand="lg">
        <Container>
          {/* Nombre de la empresa en el lado izquierdo */}

          <div className="logo">
            <img
              src={transparente}
              alt=""
              style={{ width: "200px", height: "80px" }}
            />
          </div>
          <div className="tituloProductoS">
            <h1>NUESTROS PRODUCTOS</h1>
          </div>

          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* Enlaces alineados a la derecha */}
              <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/" className="nav-link">
                  Inicio
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderProduct;
