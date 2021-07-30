import React, { useState, useEffect } from "react";
import './Candidats.css';
import candidats from "../Data/ClientData";
import CandidatCard from "./CandidatCard"


function Candidats(){
  return (
    <div>
    <h1>Candidats</h1>
    { candidats.map(candidat => {
      return (
        <>
      
       <CandidatCard candidat={candidat}/>
       </>
      )
      })
  }
   
    </div>
  );
};

export default Candidats;