import React, { useState, useEffect } from "react";
import './Candidats.css';
import candidats from "../Data/ClientData";
import CandidatCard from "./CandidatCard"


function Candidats(){
  return (
    <div>
    <h1 className="title">Candidats</h1>
    { candidats.map(candidat => {
      return (
        <>
       <CandidatCard candidat={candidat}/>
       <br/>
       </>
      )
      })
  }
   
    </div>
  );
};

export default Candidats;