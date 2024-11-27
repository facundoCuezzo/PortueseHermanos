import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Nombre de la empresa en el lado izquierdo */}
        <Navbar.Brand as={NavLink} to="/">PORTUESE HERMANOS</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Enlaces alineados a la derecha */}
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="nav-link">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos" className="nav-link">Productos</Nav.Link>
            <NavDropdown title="Servicios" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/fabrica" className="nav-link">Fabricacion</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/reparacion-venta-elasticos" className="nav-link">Reparacion y venta de elásticos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/amortiguadores-frenos" className="nav-link">Amortiguadores frenos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/alineados" className="nav-link">Alineados</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/balanceo-reparacion-automotores" className="nav-link">Balanceo reparación de automotores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ventas-repuestos" className="nav-link">Ventas de repuestos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/reparacion-tren-delantero" className="nav-link">Reparación de tren delantero</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/colocacion-tercer-eje" className="nav-link">Colocación de tercer eje</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/enderezado-chasis" className="nav-link">Enderezado de chasis</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/SobreNosotros" className="nav-link">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
