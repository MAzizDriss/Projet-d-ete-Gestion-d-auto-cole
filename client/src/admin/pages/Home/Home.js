import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProchaineSeance from '../Calendrier/ProchaineSeance';
import sessions from "../Data/SessionsData";
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
  const relativedate = new Date(2021, 1, 16, 10) // fonction pour retirer la prochaine date
function closestdate(arr) {
  let dates = arr.map(item => item.date)
  dates.sort(function (a, b) {
    var distancea = Math.abs(relativedate - a);
    var distanceb = Math.abs(relativedate - b);
    return distancea - distanceb;
  })
  dates = dates.filter(d => d > relativedate)
  return arr.find(d => dates[0] === d.date)
}
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [data, setdata] = useState(sessions)
  const [Nextsession, setNextsession] = useState(closestdate(data))
  useEffect(() => {
    setdata(sessions)
  }, [])


  return (

    <div className={classes.root}>

      <Particles/>
      <div  className={classes.seance}>
        
          <div ><ProchaineSeance session={Nextsession} className={classes.card} /></div>
          <div ><VehiculeDispo className={classes.card} /></div>
         <br/><br/>         <br/><br/>
         <br/><br/>         <br/><br/>
          </div>
      
        </div>
        
  );
}


export default Home;
