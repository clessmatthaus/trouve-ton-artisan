import React from 'react';
import {Link} from 'react-router-dom';
import artisanList from './ArtisanList.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import loup from './loup.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {useState, useEffect} from 'react';
import artisanData from './datas.json';

function ArtisanList() {
  window.scrollTo(0,0)
   const [query, setQuery] = useState("");
   //console.log(query);

   const [data, setData] = useState(artisanData);
   const sorting = (cat) => {
      const result = artisanData.filter((currentData)=>{
        return currentData.category=== cat;
      });
      setData(result);
   }

    return (
    <> 
    <div className="link-back"><p><Link to="/" className="links-style">Accueil</Link></p>  <p>Liste des artisans</p> </div>    
    <div className="section">
      <div className="input-group  mt-5 input-search"> 
        <input className="form-control" placeholder="nom, spécialité, ville, catégorie..." type="text" onChange={e=> setQuery(e.target.value)}/> 
        <img src={loup} alt=""/>
      </div>
       
      <div className="product-list">  
      { artisanData.filter(artisan=>artisan.name.toLowerCase().includes(query)||artisan.specialty.toLowerCase().includes(query)||artisan.location.toLowerCase().includes(query)||artisan.category.toLowerCase().includes(query)||artisan.note.includes(query)).map((artisan)=> (
        
         <Link className="links-style" to={`/artisan/${artisan.id}`}>
               <Card className="card-styles">
               <Card.Body className='art-body'> 
               <Card.Title className='art-names'>{artisan.name}</Card.Title>
               <Card.Text>
                 <i><img src={starsolid} alt="img"/></i>
                 {artisan.note}</Card.Text>
               <Card.Text>{artisan.specialty}</Card.Text>
               <Card.Text className="art-city">{artisan.location}</Card.Text>
               <Button variant="primary" className="btns">Pour plus de details</Button>  
               </Card.Body>
               </Card>
          </Link>
        ))}
      </div>
    </div>
    </>
    )
}
export default ArtisanList