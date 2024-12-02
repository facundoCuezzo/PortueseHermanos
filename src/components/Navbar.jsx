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
              
              <NavDropdown.Item as={NavLink} to="/reparacion-venta-elasticos" className="nav-link">Reparación y venta de elásticos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/alineado-balanceo" className="nav-link">Alineado y Balanceo</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/amortiguadores" className="nav-link">Amortiguadores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/suspension-neumaticos" className="nav-link">Suspensión y Neumáticos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/fabricacion-elasticos" className="nav-link">Fabricación de elásticos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/frenos" className="nav-link">Frenos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/ventas-repuestos" className="nav-link">Venta de repuestos</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/reparacion-tren-delantero" className="nav-link">Reparación de tren delantero</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/SobreNosotros" className="nav-link">Sobre Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
