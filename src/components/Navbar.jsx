import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../styles/Navbar.css'

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Nombre de la empresa en el lado izquierdo */}
        <Navbar.Brand href="#inicio">PORTUESE HERMANOS</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Enlaces alineados a la derecha */}
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item href="#fabrica">Reparacion y venta de elasticos</NavDropdown.Item>
              <NavDropdown.Item href="#reparacion-venta-elasticos"></NavDropdown.Item>
              <NavDropdown.Item href="#amortiguadores-frenos">Amortiguadores frenos</NavDropdown.Item>
              <NavDropdown.Item href="#alineados">Alineados</NavDropdown.Item>
              <NavDropdown.Item href="#balanceo-reparacion-automotores">Balanceo reparación de automotores</NavDropdown.Item>
              <NavDropdown.Item href="#ventas-repuestos">Ventas de repuestos</NavDropdown.Item>
              <NavDropdown.Item href="#reparacion-tren-delantero">Reparación de tren delantero</NavDropdown.Item>
              <NavDropdown.Item href="#colocacion-tercer-eje">Colocación de tercer eje</NavDropdown.Item>
              <NavDropdown.Item href="#enderezado-chasis">Enderezado de chasis</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#sobre-nosotros">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;



