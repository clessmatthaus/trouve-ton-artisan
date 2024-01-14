import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import './Fabrication.css';
import chaudronnier from './chaudronnier.jpg';
import bijoutier from './bijoutier.jpg';
import cordonnier from './cordonnier.jpg';
import couturiere from './couturiere.jpeg';
import ferronier from './ferronier.jpg';
import ebeniste from './ebeniste.jpeg';
import ali from './ali.png';
import bati from './bati.png';
import meca from './meca.png';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import fabriData from './fabrication.json';
import {useParams} from 'react-router-dom';

function Fabrication() {
  window.scrollTo(0,0)

  const [query, setQuery] = useState("");

  let {artisanId} = useParams();
  const artisan = fabriData.find((a)=>a.id == artisanId);

  return (
    <div>
      <Header />
       <div className='fabrication'>
        <div className='alimf-container'>
          <div className="divf-infos">
            <h1>Fabrication</h1>
            <p>Le secteur de la fabrication couvre une multitude de savoir-faire qui s’exercent dans des domaines très variés. Issus de la grande tradition des métiers, ils allient en permanence originalité et innovation en développant un sens artistique évident et une grande technicité dans l’emploi et le façonnage de matières premières comme le bois, les métaux, le verre ou le textile. Ce secteur regroupe notamment les métiers dits métiers d'art.</p>
          </div>
          <div className="divf-img">
            <div className="chiffre-emploif">
              <div className="divf-p1">
                <span>Entreprises en Region Auvergne-Rhône-Alpes</span>
                <p>59 000</p>
                <span>Insee 2019</span>
              </div>
            </div>
          </div>
        </div>
        <div className="list-artisans">
          <span></span>
            <h1>Quelques artisans du secteur Fabrication </h1>
          <span></span>
        </div>
        <div className="product-list">  
      { fabriData.filter(artisan=>artisan.name.toLowerCase().includes(query)||artisan.specialty.toLowerCase().includes(query)||artisan.location.toLowerCase().includes(query)||artisan.note.includes(query)).map((artisan)=> (      
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
        <h1>Les métiers du secteur Fabrication</h1>
        <div className="metiers">
         <div className="imgf-metier">
          <div className="img-d"><img src={bijoutier} alt="" width="140px" height="140px"/></div>
          <h3>Bijoutier</h3>
          <Link to="/artisan/5"><button className="btn btn-secondary btnf-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgf-metier">
         <div className="img-d"><img src={ferronier} alt="" width="140px" height="140px"/></div>
          <h3>Ferronier</h3>
          <Link to="/artisan/16"><button className="btn btn-secondary btnf-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgf-metier">
         <div className="img-d"><img src={ebeniste} alt="" width="140px" height="140px"/></div>
          <h3>Ebeniste</h3>
          <Link to="*"><button className="btn btn-secondary btnf-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgf-metier">
         <div className="img-d"><img src={cordonnier} alt="" width="140px" height="140px"/></div>
          <h3>Cordonnier</h3>
          <Link to="*"><button className="btn btn-secondary btnf-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgf-metier">
         <div className="img-d"><img src={couturiere} alt="" width="140px" height="140px"/></div>
          <h3>Couturiér</h3>
          <Link to="/artisan/2"><button className="btn btn-secondary btnf-color"> Trouver un artisan</button></Link>
         </div>
         <div className="imgf-metier">
         <div className="img-d"><img src={chaudronnier} alt="" width="140px" height="140px"/></div>
          <h3>Chaudronnier</h3>
          <Link to="*"><button className="btn btn-secondary btnf-color"> Trouver un artisan</button></Link>
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

export default Fabrication
