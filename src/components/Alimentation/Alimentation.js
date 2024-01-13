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
          <img src={chocolatier} alt="" width="120px" height="120px"/>
          <h3>Chocolatier confiseur</h3>
          <Link to="/artisan/4"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={boulanger} alt="" width="120px" height="120px"/>
          <h3>Boulanger</h3>
          <Link to="/artisan/10"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={charcutiers} alt="" width="120px" height="120px"/>
          <h3>Charcutier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={fromager} alt="" width="120px" height="120px"/>
          <h3>Fromager</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={patissier} alt="" width="120px" height="120px"/>
          <h3>Pâtissier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={boucher} alt="" width="120px" height="120px"/>
          <h3>Boucher</h3>
          <Link to="/artisan/11"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={crepier} alt="" width="120px" height="120px"/>
          <h3>Crêpier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         <div className="img-metier">
          <img src={poissonnier} alt="" width="120px" height="120px"/>
          <h3>Poissonnier</h3>
          <Link to="*"><button className="btn btn-secondary btn-color"> Trouver un artisan</button></Link>
         </div>
         </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Alimentation
