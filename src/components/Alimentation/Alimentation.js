import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Alimentation.css';
import imageAli from './alimentaire3.jpg';
import chocolatier from './chocolatier.jpeg';
import boucher from './boucher.jpeg';
import charcutiers from './charcutiers.jpg';
import boulanger from './boulanger.jpg';
import crepier from './crepier.jpg';
import fromager from './fromager.jpg';
import patissier from './patissier.jpg';
import poissonnier from './poissonnier.png';
import bati from './bati.png';
import fabrik from './fabrik.png';
import service from './meca.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import aliData from './alimentation.json';
import {useParams} from 'react-router-dom';



function Alimentation() {
  window.scrollTo(0,0)

  const [query, setQuery] = useState("");

  let {artisanId} = useParams();
  const artisan = aliData.find((a)=>a.id == artisanId);

  return (
    <div>
      <Header />
      <div className='alimentation'>
        <div className='alim-container'>
          <div className="div-infos">
            <h1>Alimentation</h1>
            <p>Alliant savoir-faire traditionnel et modernité les professions de l'alimentaire offrent aux jeunes de nombreuses opportunités d'emplois et la perspective de devenir leur propre patron. Sélectionnant eux-mêmes l'ensemble des matières premières qu'ils vont transformer et préparer, les artisans de l'alimentaire connaissent l'origine des produits qu'ils proposent. Ils savent également apporter à leur clientèle l'accueil et les conseils adaptés.</p>
          </div>
          <div className="div-img">
            <div className="chiffre-emploi">
              <div className="div-p1">
                <span>Entreprises en Region Auvergne-Rhône-Alpes</span>
                <p>27 913</p>
                <span>Insee 2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="list-artisans">
          <span></span>
            <h1>Quelques artisans du secteur Alimentation </h1>
          <span></span>
        </div>
        <div className="product-list">  
      { aliData.filter(artisan=>artisan.name.toLowerCase().includes(query)||artisan.specialty.toLowerCase().includes(query)||artisan.location.toLowerCase().includes(query)||artisan.note.includes(query)).map((artisan)=> (      
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
        <h1>Les métiers du secteur Alimentation</h1>
        <div className="metiers">
         <div className="img-metier">
          <div className="img-d"><img src={chocolatier} alt="" width="140px" height="140px"/></div>
          <h3>Chocolatier confiseur</h3>
          <Link to="/artisan/4"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={boulanger} alt="" width="140px" height="140px"/></div>
          <h3>Boulanger</h3>
          <Link to="/artisan/10"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={charcutiers} alt="" width="140px" height="140px"/></div>
          <h3>Charcutier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={fromager} alt="" width="140px" height="140px"/></div>
          <h3>Fromager</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={patissier} alt="" width="140px" height="140px"/></div>
          <h3>Pâtissier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={boucher} alt="" width="140px" height="140px"/></div>
          <h3>Boucher</h3>
          <Link to="/artisan/11"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={crepier} alt="" width="140px" height="140px"/></div>
          <h3>Crêpier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
         <div className="img-d"><img src={poissonnier} alt="" width="140px" height="140px"/></div>
          <h3>Poissonnier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         </div>
      </div>
      <div className="autres-secteurs">
          <h1>Les autres secteurs</h1>
          <div className="secteurs">
          <div className="secteur-div">
            <div className="secteur-div1">
               <h3>Bâtiment</h3>               
                <p>Chauffagiste</p>
                <p>Plombier</p>
                <p>Menuisier</p>
                <p>Electricien</p>
                <p>Charpentier</p>
                <Link to="/batiment"><a>Voir les fiches métiers</a></Link>
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
                <Link to="/fabrication"><a>Voir les fiches métiers</a></Link>
            </div>
            <div className="secteur-div-mg">
              <img src={fabrik} alt="" width="100px"/>
            </div>
          </div>
          <div className="secteur-div">
            <div className="secteur-div1">
            <h3>Services</h3>               
                <p>Coiffeure</p>
                <p>Carrossier</p>
                <p>Fleuriste</p>
                <p>Toiletteur</p>
                <p>Webdesign</p>
                <Link to="/services"><a>Voir les fiches métiers</a></Link>
            </div>
            <div className="secteur-div-mg">
              <img src={service} alt="" width="100px"/>
            </div>
          </div>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Alimentation
