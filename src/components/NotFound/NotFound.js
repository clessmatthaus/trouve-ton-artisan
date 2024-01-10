import React from 'react'
import Errors from './Errors.gif'
import {Link} from 'react-router-dom';
import './NotFound.css';

function NotFound() {
    window.scrollTo(0,0)
  return (
    <div className="notfound">
      <img className="erreur" src={Errors} alt="Page introuvable..."/>
      <br/>
      <h2>Désolé cette page n'existe pas</h2>
      
      <Link style={{textDecoration: 'none'}} to="/"> <p>Aller à la page d'accueil</p></Link>
      
    </div>
  )
}

export default NotFound