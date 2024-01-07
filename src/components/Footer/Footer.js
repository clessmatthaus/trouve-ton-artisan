import React from 'react';
import footer from './Footer.css';
import logos from './Logo.png';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="mentions">
        <ul>
            <li>mentions légales</li>
            <li>données personnelles</li>
            <li>accesibilité</li>
            <li>cookies</li>
        </ul>

    </div>
    <div className="footer-content">
    <div className="footer-container">
        <div className="ste">
          <a className="colorLog"  href="#"><img className="logo" src={logos} alt="logo..."/></a>
          <h4>L’artisanat dans cette région</h4>
          <p>Près d’un tier des entreprises de la région sont des entreprises d’artisanat. On en comptait
           221000 en 2021. C’est l’une des régions les plus artisanales de France ! Et la région compte
           bien entretenir cet engouement, d’où la création de la plateforme
          </p>
        </div>
        <div className="infos-section">
        <div className="liens">
            <h4>Liens</h4>
            <ul>
                <li><Link class="links" to="/">Accueil</Link></li>
                <li><Link class="links" to="/batiment">Bâtiment</Link></li>
                <li><Link class="links" to="/services">Services</Link></li>
                <li><Link class="links" to="/alimentation">Alimentation</Link></li>
            </ul>
        </div>
        <div className="ste-adress">
           <h4>Nos coordonnées</h4> 
           <ul>
                <li>101 cours Charlemagne</li>
                <li>CS 20033t</li>
                <li>69269 LYON CEDEX 02</li>
                <li>France</li>
                <li>+33 (0)4 26 73 40 00</li>
            </ul>   
        </div>
        <div className='icons-links'>
        <h4>Nos réseaux sociaux</h4>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM351.3 199.3v0c0 86.7-66 186.6-186.6 186.6c-37.2 0-71.7-10.8-100.7-29.4c5.3 .6 10.4 .8 15.8 .8c30.7 0 58.9-10.4 81.4-28c-28.8-.6-53-19.5-61.3-45.5c10.1 1.5 19.2 1.5 29.6-1.2c-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3c-9-6-16.4-14.1-21.5-23.6s-7.8-20.2-7.7-31c0-12.2 3.2-23.4 8.9-33.1c32.3 39.8 80.8 65.8 135.2 68.6c-9.3-44.5 24-80.6 64-80.6c18.9 0 35.9 7.9 47.9 20.7c14.8-2.8 29-8.3 41.6-15.8c-4.9 15.2-15.2 28-28.8 36.1c13.2-1.4 26-5.1 37.8-10.2c-8.9 13.1-20.1 24.7-32.9 34c.2 2.8 .2 5.7 .2 8.5z"/></svg></a>
        <a href="https://fr.linkedin.com/" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></a>
        </div>
        </div>
    </div>
    <div className="copyrith">
        &#169;  Développé par Cless Matthaüs 
    </div>
    </div>
    </>
  )
}

export default Footer


