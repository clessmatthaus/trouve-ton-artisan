import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import './Services.css';
import carrossier from './carrossier.jpeg';
import coiffeur from './coiffeuse.jpg';
import estheticienne from './estheticienne.jpg';
import fleuriste from './fleuriste.jpg';
import toiletteur from './toiletteur.jpg';
import webdesign from './webdesign.jpeg';
import servives from './carrossier.jpg';
import ali from './aliment.png';
import bati from './bati.png';
import fabri from './fabrik.png';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import serviData from './services.json';
import {useParams} from 'react-router-dom';

function Services() {
  window.scrollTo(0,0)
  const [query, setQuery] = useState("");

  let {artisanId} = useParams();
  const artisan = serviData.find((a)=>a.id == artisanId);
  return (
    <div>
    <Header />
    <div className='services'>
        <div className='alimv-container'>
          <div className="divv-infos">
            <h1>Services</h1>
            <p>On n'est jamais si bien servi que par la Première Entreprise de France ! Le secteur des services regroupe une grande variété de métiers et permet à chacun de construire son avenir à sa mesure tout en se sentant utile au quotidien.</p>
          </div>
          <div className="divv-img">
            <div className="chiffre-emploiv">
              <div className="divv-p1">
                <span>Entreprises en Region Auvergne-Rhône-Alpes</span>
                <p>65 622</p>
                <span>Insee 2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="list-artisans">
          <span></span>
            <h1>Quelques artisans du secteur Services </h1>
          <span></span>
        </div>
        <div className="product-list">  
      { serviData.filter(artisan=>artisan.name.toLowerCase().includes(query)||artisan.specialty.toLowerCase().includes(query)||artisan.location.toLowerCase().includes(query)||artisan.note.includes(query)).map((artisan)=> (      
         <Link className="links-style" to={`/artisan/${artisan.id}`}>
               <Card className="card-styles" key={artisan.id}>
               <Card.Body className='art-body'> 
               <Card.Title className='art-names'>{artisan.name}</Card.Title>
               <Card.Text>
                 <i><img src={starsolid} alt="img"/></i>
                 {artisan.note}</Card.Text>
               <Card.Text>{artisan.specialty}</Card.Text>
               <Card.Text className="art-city">{artisan.location}</Card.Text>
               <Button variant="primary" className="btn btn-secondary">Pour plus de details</Button>
               <Card.Text className="art-cate">Secteur d'activité  : <b>{artisan.category}</b></Card.Text> 
               </Card.Body>
               </Card>
          </Link>
        ))}
      </div>
      <div className="metiers-ali">
        <h1>Les métiers du secteur Services</h1>
        <div className="metiers">
         <div className="imgv-metier">
          <div className="img-d"><img src={fleuriste} alt="" width="140px" height="140px"/></div>
          <h3>Fleuriste</h3>
          <Link to="/artisan/14"><button className="btn btn-secondary btnv-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgv-metier">
         <div className="img-d"><img src={carrossier} alt="" width="140px" height="140px"/></div>
          <h3>Carrossier</h3>
          <Link to="/artisan/15"><button className="btn btn-secondary btnv-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgv-metier">
         <div className="img-d"><img src={coiffeur} alt="" width="140px" height="140px"/></div>
          <h3>Coiffeur</h3>
          <Link to="/artisan/17"><button className="btn btn-secondary btnv-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgv-metier">
         <div className="img-d"><img src={estheticienne} alt="" width="140px" height="140px"/></div>
          <h3>Estheticienne</h3>
          <Link to="*"><button className="btn btn-secondary btnv-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgv-metier">
         <div className="img-d"><img src={toiletteur} alt="" width="140px" height="140px"/></div>
          <h3>Toiletteur</h3>
          <Link to="/artisan/6"><button className="btn btn-secondary btnv-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgv-metier">
         <div className="img-d"><img src={webdesign} alt="" width="140px" height="140px"/></div>
          <h3>Webdesign</h3>
          <Link to="/artisan/8"><button className="btn btn-secondary btnv-color"> Trouver un artisan</button></Link>
         </div>
         </div>
      </div>
      <div className="autres-secteurs">
          <h1>Les autres secteurs</h1>
          <div className="secteurs">
          <div className="secteur-div">
            <div className="secteur-div1">
               <h3>Alimentation</h3>               
                <p>Chocolatier confiseur</p>
                <p>Poissonnier</p>
                <p>Boulanger</p>
                <p>Charcutier</p>
                <p>Fromager</p>
                <Link to="/alimentation"><a>Voir les fiches métiers</a></Link>
            </div>
            <div className="secteur-div-mg">
              <img src={ali} alt="" width="100px"/>
            </div>
          </div>
          <div className="secteur-div">
            <div className="secteur-div1">
            <h3>Bâtiment</h3> 
                <p>Chauffagiste</p>
                <p>Plombier</p>
                <p>Menuisier</p>
                <p>Electricien</p>
                <p>Charpentier</p>
                <Link to="/fabrication"><a>Voir les fiches métiers</a></Link>
            </div>
            <div className="secteur-div-mg">
              <img src={bati} alt="" width="100px"/>
            </div>
          </div>
          <div className="secteur-div">
            <div className="secteur-div1">
            <h3>Fabrication</h3>               
                <p>Couturier</p>
                <p>Bijoutier</p>
                <p>Ferronier</p>
                <p>Chaudronnier</p>
                <p>Ebénister</p>
                <Link to="/services"><a>Voir les fiches métiers</a></Link>
            </div>
            <div className="secteur-div-mg">
              <img src={fabri} alt="" width="100px"/>
            </div>
          </div>
          </div>
      </div>
      </div>
    <Footer />
    </div>

  )
}

export default Services
