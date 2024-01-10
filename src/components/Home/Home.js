import React from 'react';
import logo from './favicon-32.png';
import artisans from './artisan.webp';
import home from './Home.css';
import Artisan from '../../Container/Artisan';


function Home() {
  window.scrollTo(0,0)
  return (
    <div className="home-container"> 
        <h1>Comment trouver mon artisan ?</h1>
        <div className="artisan-block">
        <div className="find-artisan">
        <div className="art-img"  href="#"><img className="logo" src={logo} alt="logo..."/></div>
        <div className="find-process">
          <ol>
            <li><span>Choisir la catégorie d'artisanat dans le menu.</span></li>
            <li><span>Choisir un artisan.</span></li>
            <li><span>Contacter via le formulaire de contact.</span></li>
            <li><span>Une réponse sera apportée sous 48h.</span></li>
          </ol>
        </div>
        <div className="art-jobs">
        <img className="logo" src={artisans} alt="artisans..."/>
        </div>
      </div>
      </div>
      <div className="artisans-container">
      <div className="best-artisans">
      <span></span>
      <h1>Les trois meilleurs artisans du mois</h1>
      <span></span> 
      </div>
     <Artisan/>
      </div>
    </div>
  )
}

export default Home
