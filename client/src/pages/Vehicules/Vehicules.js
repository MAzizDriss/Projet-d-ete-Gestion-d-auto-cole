import React from "react";
import cars from "../Data/CarData";
import CarCard from "./CarCard"
import './Vehicules.css'


function Candidats(){
  return (
    <div>
      <h1   className="title">Véhicules</h1>
    <div className="page">
    <>
       <CarCard cars={cars}/>
       </>
    </div>
    </div>
  );
};

export default Candidats;

