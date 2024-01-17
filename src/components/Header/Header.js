import React from 'react'
import './Header.css'
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

  const [value, setValue] = useState()
  const [data, setData] = useState([])

  const onChange = async (e) => {
    setValue(e.target.value)
    const response = await fetch('http://localhost:3000/api/datas.json')
    const data = await response.json()
    setData(data)
  }
  return (
  <div>
    <Navbar expand="lg"  className="header">
    <Container fluid>
      <NavLink exact to="/" activeClassName="navActive">
      <a className="colorLog"  href="#">
        <img className="logo" src={logos} alt="logo..."/>
      </a>
    </NavLink>
      <Navbar.Toggle aria-controls="navbarScroll"/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0 "
          navbarScroll
        >
        <NavLink exact to="/" className="link">
          <a className="nav-link">Accueil </a> 
        </NavLink>
        <NavLink exact to="/alimentation" className="link">
          <a className="nav-link">Alimentation</a>
        </NavLink>
        <NavLink exact to="/batiment" className="link">
          <a className="nav-link">Bâtiment</a>
        </NavLink>
        <NavLink exact to="/fabrication" className="link">
          <a className="nav-link">Fabrication</a>
        </NavLink>
        <NavLink exact to="/services" className="link">
          <a className="nav-link">Services</a>
        </NavLink>
        </Nav>        
        <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Trouver un artisan"onChange={onChange} value={value} 
            className="me-2"
            />
          <Button variant="outline-primary">Rechercher</Button>
        </Form>
           
      </Navbar.Collapse>
    </Container> 
  </Navbar> 
  <div className="dropdown-content">
    {
      value &&
      data.filter(item => item.name.toLowerCase().startsWith(value) && item.name !== value ||item.location.toLowerCase().startsWith(value) && item.location !== value ||item.specialty.toLowerCase().startsWith(value) && item.specialty !== value)
      .map(item => <div className="result-search" key={item.id} onClick={(e)=> setValue(item.name)}>
        <Link className="links-styles" to={`/artisan/${item.id}`}><p>{item.name} </p></Link>
        <Link className="links-styles" to={`/artisan/${item.id}`}><p>{item.specialty}</p></Link>
        <Link className="links-styles" to={`/artisan/${item.id}`}><p><b>{item.location}</b></p></Link>
        
        <hr/>
        </div>)    
    }
  </div>
</div>
  )
}

export default Header
