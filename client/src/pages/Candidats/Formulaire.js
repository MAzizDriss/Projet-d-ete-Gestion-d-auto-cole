import React from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import candidats from "../Data/ClientData";



function Formulaire() {
    return (
        <div className='formulaire' >
            <h1>Modifier les donnée de {candidats[1].name}</h1>
            <FormControl>
                <InputLabel className="nameLabel">Nom du candidat</InputLabel>
                <div id="my-input" aria-describedby="my-helper-text">{candidats[1].name}</div>
                <FormHelperText id="my-helper-text">Your name is awesome.</FormHelperText>
            </FormControl>   
             </div>
    );
}

export default Formulaire;