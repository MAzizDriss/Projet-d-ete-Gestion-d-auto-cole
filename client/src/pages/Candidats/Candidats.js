import React from 'react';
import './Candidats.css';
import { Link } from 'react-router-dom';


function Candidats() {
  return (
    
    <div>
      <div className="title">
      <h1  > Candidats</h1></div>
      <br/>
    <hr className='ligne'></hr>
    <div className="buttons">
    <div className="choix1">
      <div className="parag">
        <h2>Gérez les candidats</h2>
        <br/>
        <p>Ajouter ou supprimer un candidats</p>
        <p>Mise à jour des données d'un candidats</p>
      </div>
      <div className="bouton1">
      <Link to='/Candidats/Gestion'  className="btn-grad">Gestion des Candidats</Link>
  
      </div></div>
      <div className="choix2"> 
      <div className="parag">
        <h2>Tester les candidats</h2>
        <br/>
        <p>Ajouter, supprimer ou modifier les questions</p>
        <p>Surveillez les résultats des tests</p>
      </div>
      <div className="bouton2">
      <Link to='/Candidats/tests' className="btn-grad">Tests des Candidats</Link>
    </div></div>
    </div>
    </div>
  );
}

export default Candidats;
