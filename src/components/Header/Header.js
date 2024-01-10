import React from 'react'
import header from './Header.css'
import {useState} from "react";
import {NavLink, Link} from 'react-router-dom';
import logos from './Logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//React font Awesome Import
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
  <header className="header-nav">
    <Navbar expand="lg" className="bg-color">
      <Container fluid>
        <Navbar.Brand><a className="colorLog"><Link class="links" to="/"><img className="logo" src={logos} alt="logo..."/></Link></a></Navbar.Brand>
        <Navbar.Toggle  aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 ft-size"
            style={{ maxHeight: '230px' }}
            navbarScroll
          > 
            <Nav.Link as={Link} to="/">Accueil</Nav.Link>
            <Nav.Link as={Link} to="/alimentation">Alimentation</Nav.Link>
            <Nav.Link as={Link} to="/batiment">Bâtiment</Nav.Link>
            <Nav.Link as={Link} to="/fabrication">Fabrication</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="nom, ville, spécialité"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary bg-search">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
  )
}

export default Header
