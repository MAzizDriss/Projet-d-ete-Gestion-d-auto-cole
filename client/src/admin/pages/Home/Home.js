import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProchaineSeance from '../Calendrier/ProchaineSeance';
import VehiculeDispo from '../Vehicules/VehiculeDispo';
import Particles from 'react-particles-js';


const useStyles = makeStyles((theme) => ({
 seance: {
marginLeft:450,
marginTop:'-50%',
marginBottom:'-30px'
 },
  root:{
marginBottom:'-1vh',
    backgroundColor: "#060b26"
  },
  close: {
    padding: theme.spacing(0.5),
  },
  buttonNotif:{
bottom:810,
left:1300,

  }
}));

function Home(props) {
 
  const classes = useStyles();




  return (

    <div className={classes.root}>

      <Particles/>
      <div  className={classes.seance}>
        
          <div ><ProchaineSeance  className={classes.card} /></div>
          <div ><VehiculeDispo className={classes.card} /></div>
         <br/><br/>         <br/><br/>
         <br/><br/>         <br/><br/>
          </div>
      
        </div>
        
  );
}


export default Home;
