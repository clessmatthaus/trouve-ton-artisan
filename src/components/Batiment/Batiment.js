import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import batiData from './batiment.json';
import {useParams} from 'react-router-dom';
import imageBati from './batiment.jpg';
import './Batiment.css';
import charpentier from './charpentier.jpg';
import chauffagiste from './chauffagiste.jpg';
import electricien from './electricien.jpg';
import menuisier from './menuisier.jpg';
import plombier from './plombier.jpeg';
import couvreur from './couvreur.jpeg';
import ali from './ali.png';
import fabrik from './fabrik.png';
import meca from './meca.png';

function Batiment() {
  window.scrollTo(0,0)

  const [query, setQuery] = useState("");

  let {artisanId} = useParams();
  const artisan = batiData.find((a)=>a.id == artisanId);

  return (
    <div>
      <Header />
      <div className='batiment'>
        <div className='alims-container'>
          <div className="divs-infos">
            <h1>Bâtiment</h1>
            <p>Des métiers passionnants... qui allient modernité et tradition ! Les métiers de l’artisanat du bâtiment sont des métiers diversifiés, techniques et passionnants. Ils exigent savoir-faire, compétence, initiative et sens du relationnel avec les clients. Ils allient haute technologie et tradition. Ils peuvent s’exercer de façon indépendante ou au sein d’une équipe. Les possibilités d’évolution sont permanentes et ces métiers s’exercent sur des marchés aux enjeux considérables.</p>
          </div>
          <div className="divs-img">
            <div className="chiffre-emplois">
              <div className="divs-p1">
                <span>Entreprises en Region Auvergne-Rhône-Alpes</span>
                <p>107 535</p>
                <span>Insee 2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="list-artisans">
          <span></span>
            <h1>Quelques artisans du secteur Bâtiment </h1>
          <span></span>
        </div>
        <div className="product-list">  
      { batiData.filter(artisan=>artisan.name.toLowerCase().includes(query)||artisan.specialty.toLowerCase().includes(query)||artisan.location.toLowerCase().includes(query)||artisan.note.includes(query)).map((artisan)=> (      
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
        <h1>Les métiers du secteur Bâtiment</h1>
        <div className="metiers">
         <div className="imgs-metier">
          <div className="img-d"><img src={chauffagiste} alt="" width="140px" height="140px"/></div>
          <h3>Chauffagiste</h3>
          <Link to="/artisan/9"><button className="btn btn-secondary btns-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgs-metier">
         <div className="img-d"><img src={electricien} alt="" width="140px" height="140px"/></div>
          <h3>Electricien</h3>
          <Link to="/artisan/12"><button className="btn btn-secondary btns-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgs-metier">
         <div className="img-d"><img src={menuisier} alt="" width="140px" height="140px"/></div>
          <h3>Menuisier</h3>
          <Link to="/artisan/7"><button className="btn btn-secondary btns-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgs-metier">
         <div className="img-d"><img src={charpentier} alt="" width="140px" height="140px"/></div>
          <h3>Charpentier</h3>
          <Link to="*"><button className="btn btn-secondary btns-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgs-metier">
         <div className="img-d"><img src={plombier} alt="" width="140px" height="140px"/></div>
          <h3>Plombier</h3>
          <Link to="/artisan/1"><button className="btn btn-secondary btns-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgs-metier">
         <div className="img-d"><img src={couvreur} alt="" width="140px" height="140px"/></div>
          <h3>Couvreur</h3>
          <Link to="*"><button className="btn btn-secondary btns-color"> Trouver un artisan</button></Link>
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
              <img src={meca} alt="" width="100px"/>
            </div>
          </div>
          </div>
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Batiment
