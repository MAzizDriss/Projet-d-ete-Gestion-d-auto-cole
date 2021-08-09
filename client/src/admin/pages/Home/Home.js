import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProchaineSeance from '../Calendrier/ProchaineSeance';
import sessions from "../Data/SessionsData";
import VehiculeDispo from '../Vehicules/VehiculeDispo';
import Particles from 'react-particles-js';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {GrNotification} from 'react-icons/gr'


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
  const { width } = props;
  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (

    <div className={classes.root}>

      <Particles/>
      <div>
      <Button className={classes.buttonNotif} variant="contained" onClick={handleClick('Pas de nouveaux candidats !')}>
        <GrNotification style={{marginRight:"8px", marginLeft:"-5px"}}/>
        Notifications</Button>

      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <AiOutlineCloseCircle />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
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
