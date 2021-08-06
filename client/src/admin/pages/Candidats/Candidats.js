import React from "react";
import './Candidats.css';
import candidats from "../Data/ClientData";
import CandidatCard from "./CandidatCard"


function Candidats(){
  return (
    <div>
    <h1 className="title">Candidats</h1>
    <>
       <CandidatCard candidats={candidats}/>
       </>
    </div>
  );
};

export default Candidats;