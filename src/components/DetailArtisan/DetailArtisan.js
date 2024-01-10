import React from 'react';
import {useState, useRef} from "react";
import {Link, useParams} from 'react-router-dom';
import artisanData from './datas.json';
import starsolid from './star-solid.svg';
import logo from './favicon-32.png';
import left from './left.svg';
import './DetailArtisan.css';

function DetailArtisan() {
  window.scrollTo(0,0)

  let {artisanId} = useParams();
  const artisan = artisanData.find((a)=>a.id == artisanId);

  const[inputData, setInputData] = useState({
    name: "",
    email: "",
    phone:"",
    subject: "",
    message: ""
  })
  const fname = useRef("");
  const femail = useRef("");
  const fphone = useRef("");
  const fsubject = useRef("");
  const fmessage = useRef("");

  const [errors, setErrors] = useState({

  })
  function handleInput(e) {
    const {name, value} = e.target;
    setInputData({
      ...inputData, [name] : value
    })
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    fname.current.value="";
    femail.current.value="";
    fphone.current.value="";
    fsubject.current.value="";
    fmessage.current.value="";
    
  const validationErrors = {}
    if(!inputData.name.trim()){
      validationErrors.name = "le nom est requis"
    }
    if(!inputData.email.trim()){
      validationErrors.email = "Veuillez renseigner un email"
    }else if(!/\S+@\S+\.\S+/.test(inputData.email)){
      validationErrors.email = "email invalide"
    }
    if(!inputData.phone.trim()){
      validationErrors.phone = "le numero de téléphone est requis"
    }
    if(!inputData.subject.trim()){
      validationErrors.subject = "merci de completer ce champ"
    }
    if(!inputData.message.trim()){
      validationErrors.message = "merci de completer ce champ"
    }
    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      alert("Message envoyé avec succès")
    }

  }

  return (
<div className="detail-container">
    <div className="detail-content">
         <div className="link-back"><p><Link to="/listeartisans" className="links-style">Liste des artisans</Link></p><img src={left} alt=""/>  <p>Détails artisan</p> </div>  
         <div className="fiche-artisan">
           <span></span><h2>{artisan.name}</h2><span></span>
         </div>
        <div className="details-infos">
           <div className="infos"> 
             <div className="infos-f">
                <img src={logo} alt="logo" width="46px" className="logos"/>
              <h3>{artisan.name}</h3>
              <p>Note : <img src={starsolid} alt="img"/> x {artisan.note}</p>
              <p>Métier : {artisan.specialty}</p>
              <p>Ville : {artisan.location}</p>
             </div>
            </div>
            <div className="about">
             <h4>À propos</h4>
             <p>{artisan.about}</p>
             <p><b>Secteur d'activité</b> : {artisan.category}</p>
             <p><a style={{textDecoration: 'none'}} href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a></p>
            </div>
        </div>

        
    <div className='card-contact'>
       
        <div className='card-content'>
        <div className="card-content1">
          <h1 id="contact-title">Formulaire de contact</h1>
          <div className="head-title">
          <p>Pour contacter <b>{artisan.name}</b> en vue d'une future collaboration, merci de remplir le formulaire de contact</p>
          </div>
          <form onSubmit={handleSubmit} className="form-contact">
            <input type='text'ref={fname} placeholder="Votre nom" name="name" onChange={handleInput}/>
            {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
            <input type='email' ref={femail}  placeholder="Votre adresse email" name="email" onChange={handleInput}/>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <input type='tel' ref={fphone}  placeholder="Votre numero de téléphone" name="phone" onChange={handleInput}/>
            {errors.phone && <p style={{color:"red"}}>{errors.phone}</p>}
            <input type='text' ref={fsubject}  placeholder="Sujet" name="subject" onChange={handleInput}/>
            {errors.subject && <p style={{color:"red"}}>{errors.subject}</p>}
            <textarea ref={fmessage}  placeholder="Votre message" name="message" onChange={handleInput}/>
            {errors.message && <p style={{color:"red"}}>{errors.message}</p>}
            <button className="btn btn-primary btn-sub" type='submit'>Envoyer</button>
          </form>  
        </div>
        </div>
    </div>

    </div>
</div>
  )
}

export default DetailArtisan