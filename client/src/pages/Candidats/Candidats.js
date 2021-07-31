import React, { useState, useEffect } from "react";
import './Candidats.css';
import candidats from "../Data/ClientData";
import CandidatCard from "./CandidatCard"


function Candidats(){
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <div>
    <h1 className="title">Candidats</h1>
    { candidats.map(candidat => {
      return (
        <>
       <CandidatCard candidat={candidat} modal={modal} Toggle={Toggle}/>
       <br/>
       </>
      )
      })
  }
   
    </div>
  );
};

export default Candidats;