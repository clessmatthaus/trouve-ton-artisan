import React from 'react'
import header from './Header.css'
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ft-size"
            style={{ maxHeight: '180px' }}
            navbarScroll
          >
            <Nav.Link className="item"><Link class="links" to="/">Accueil</Link></Nav.Link>
            <Nav.Link className="item"><Link class="links" exact to="/batiment">Bâtiment</Link></Nav.Link>
            <Nav.Link className="item"><Link class="links" exact to="/services">Services</Link></Nav.Link>
            <Nav.Link className="item"><Link class="links" exact to="/alimentation">Alimentation</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher un artisan "
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary bg-search">Chercher</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
</header>
  )
}

export default Header
