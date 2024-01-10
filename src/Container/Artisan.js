import React from 'react'
import {Link} from 'react-router-dom';
import artisan from './Artisan.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import starregular from './star-regular.svg';
import starstroke from './starstroke.svg';
import click from './fing.gif';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState, useRef} from "react";
import {useParams} from 'react-router-dom';
import artisanData from './datas.json';

function Artisan() {
  
  let {artisanId} = useParams();
  const artisan = artisanData.find((a)=>a.id == artisanId);

  return (
  <>
<div className="artisans">
    <Card className="card-style">
    <Card.Img className="card-img" variant="top" src="./chaufaggiste.jpg" alt=""/>
    <Card.Body>
      <Card.Title className='art-name'>Orville Salmons</Card.Title>
      <Card.Text>Chauffagiste</Card.Text>
      <Card.Text>Evian</Card.Text>
      <Card.Text>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
         ( 5/5 )</Card.Text>
      <Link to="./artisan/9"><Button variant="primary" className="btn-bg">Contacter l'artisan</Button></Link>
    </Card.Body>
  </Card>
  <Card className="card-style">
  <Card.Img className="card-img" variant="top" src="./chocolatier.webp" alt=""/>
    <Card.Body>
      <Card.Title className='art-name'>Chocolaterie Labbé</Card.Title>
      <Card.Text>Chocolatier</Card.Text>
      <Card.Text>Grenoble</Card.Text>
      <Card.Text>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starsolid} alt=""/></i>
        <i className="fas fa-star"><img src={starstroke} alt=""/></i>
        ( 4.9/5 )</Card.Text>
        <Link to="./artisan/4"><Button variant="primary" className="btn-bg">Contacter l'artisan</Button></Link>
    </Card.Body>
  </Card>
  <Card className="card-style">
  <Card.Img className="card-img" variant="top" src="./boulanger.png" alt=""/>
  <Card.Body>
    <Card.Title className='art-name'>Au pain chaud</Card.Title>
    <Card.Text>Boulanger</Card.Text>
    <Card.Text>Montélimar</Card.Text>
    <Card.Text>
    <i className="fas fa-star"><img src={starsolid} alt=""/></i>
    <i className="fas fa-star"><img src={starsolid} alt=""/></i>
    <i className="fas fa-star"><img src={starsolid} alt=""/></i>
    <i className="fas fa-star"><img src={starsolid} alt=""/></i>
    <i className="fas fa-star"><img src={starregular} alt=""/></i>
      ( 4.8/5 )</Card.Text>
      <Link to="./artisan/10"><Button variant="primary" className="btn-bg">Contacter l'artisan</Button></Link>
  </Card.Body>
</Card>
</div><Link to="/listeartisans"  className="links-style">
<div className="nos-artisans">
 <h5>Voir la liste des artisans</h5>
  <img src={click} alt=""/>
</div></Link>
</>
  )
}

export default Artisan
