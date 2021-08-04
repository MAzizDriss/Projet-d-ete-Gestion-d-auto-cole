/*import React from "react";
import cars from "../Data/CarData";
import CarCard from "./CarCard"
import './Vehicules.css'
import { Grid} from '@material-ui/core';


function Vehicules() {
  return (
    <div>
      <h1 className="title">Véhicules</h1>
      <div className="page">
        <>
          <Grid container spacing={1}>
            <CarCard cars={cars} />
          </Grid>
        </>
      </div>
    </div>
  );
};

export default Vehicules;*/

import React from "react";
import "./Vehicules.css";
import Card from "./CarCard";
import cars from "../Data/CarData";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop:35,
 },
});

export default function Vehicules() {
  const classes = useStyles();
  const [cardata, setcardata] = React.useState(cars)

  return (
    <div>
         <h1 style={{marginLeft:'95vh', marginTop:'4vh'}} >Véhicules</h1>
    <Button href='/Vehicules/ajouter' variant="contained" color="secondary" style={{marginLeft:'45%',width:'10%', marginTop:'2%'}}>
   <center style={{marginRight:'15%'}} >Ajouter</center>
  </Button>
  
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
     
      {cardata.map(car =>
      <Grid item xs={12} sm={6} md={4}>
        <Card car={car}/>
      </Grid>
      )}
    </Grid>
    </div>
  );
}

