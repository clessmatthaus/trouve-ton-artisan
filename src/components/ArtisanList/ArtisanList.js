import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Link} from 'react-router-dom';
import artisanList from './ArtisanList.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import starsolid from './star-solid.svg';
import loup from './loup.svg';
import left from './left.svg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from 'axios';
import {useState, useEffect} from 'react';
import Select from 'react-select';
import artisanData from './datas.json';


function ArtisanList() {
  window.scrollTo(0,0)

  

   const [query, setQuery] = useState("");
   const [selectedCategory, setSelectedCategory] = useState(null);
   //console.log(query);
   const [data, setData] = useState(artisanData);
   const sorting = (cat) => {
      const result = artisanData.filter((currentData)=>{
        return currentData.category=== cat;
  
      });
      setData(result);
   }
   //sort list items by category
   const categories = Array.from(
    new Set(data.map((res)=> res.category))
   )
   const categoryOptions = categories.map((category)=> ({
    value : category,
    label : category
   }))
   const filterArtisans = selectedCategory ? data.filter((artisan)=> artisan.category === selectedCategory.value):data;

    return (
    <> 
    <Header />
    <div className="link-back"><Link to="/" className="links-style"><p>Accueil</p></Link><img src={left} alt=""/> <p>Liste des artisans</p> </div>    
    <div className="section">
      <div className="input-group  mt-5 input-search"> 
        <input className="form-control" placeholder="nom, spécialité, ville, catégorie..." type="text" onChange={e=> setQuery(e.target.value)}/> 
        <img src={loup} alt=""/>
      </div>
       <div className="sort-div">
        <Select
        options={categoryOptions}
        isClearable
        placeholder="Trier par secteur d'activité"
        onChange={(selectOption)=>setSelectedCategory(selectOption)}
        value={selectedCategory}
        />
       </div>
      <div className="product-list">  
      { filterArtisans.filter(artisan=>artisan.name.toLowerCase().includes(query)||artisan.specialty.toLowerCase().includes(query)||artisan.location.toLowerCase().includes(query)||artisan.note.includes(query)).map((artisan)=> (      
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
    </div>
    <Footer />
    </>
    )
}
export default ArtisanList