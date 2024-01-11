import React from 'react'
import './Header.css'
import {useState} from "react";
import {NavLink} from 'react-router-dom';
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
<nav className="navbar navbar-expand-lg header-nav">
  <NavLink exact to="/" activeClassName="navActive">
  <a className="colorLog"  href="#"><img className="logo" src={logos} alt="logo..."/></a>
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav " aria-expanded="false" aria-label="Toggle navigation">
  <FontAwesomeIcon icon={faBars} style={{color:"#0074c7"}}/>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav bar-nav">
      
      <li className="nav-item active">
        <NavLink exact to="/" activeClassName="navActive">
          <a className="nav-link" href="#">Accueil </a> 
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/alimentation" activeClassName="navActive">
          <a className="nav-link" href="#">Alimentation</a>
        </NavLink> 
      </li>
      <li className="nav-item">
        <NavLink exact to="/batiment" activeClassName="navActive">
          <a className="nav-link" href="#">Bâtiment</a>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/fabrication" activeClassName="navActive">
          <a className="nav-link" href="#">Fabrication</a>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/services" activeClassName="navActive">
          <a className="nav-link" href="#">Services</a>
        </NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Header
