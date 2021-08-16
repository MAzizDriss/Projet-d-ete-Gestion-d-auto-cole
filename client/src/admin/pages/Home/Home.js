import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProchaineSeance from '../Calendrier/ProchaineSeance';
import VehiculeDispo from '../Vehicules/VehiculeDispo';
import Particles from 'react-particles-js';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';

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

  },
  title: {
    fontSize: 36,
    color: '#f2f2f2',
    marginLeft: '25%'
  },
}));

function Home(props) {
 
  const classes = useStyles();
  const [cardata, setcardata] = React.useState()
  React.useEffect(()=>{
    axios.get('http://localhost:3001/api/admin/vehicule/vehicules', {
      headers: {
          "auth-token": localStorage.getItem('token')
      }
  }).then((result) => { setcardata(result.data)
                         })
      .catch((err) => console.log(err))
  },[])


  return (

    <div className={classes.root}>

      <Particles/>
      <div  className={classes.seance}>
        
          <div ><ProchaineSeance  className={classes.card} /></div>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Véhicules disponibles:
        </Typography>
          {cardata&&cardata.map(car=><div ><VehiculeDispo car={car} className={classes.card} /></div>)}
         <br/><br/>         <br/><br/>
         <br/><br/>         <br/><br/>
          </div>
      
        </div>
        
  );
}


export default Home;
