import React from "react";
import './Profile.css'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import avatar from './avatar.png'
import axios from 'axios'
import FormCard from './FormCard'
import { FcCheckmark } from "react-icons/fc";
import MuiAlert from '@material-ui/lab/Alert';
import { IoMdAlert } from "react-icons/io";
import { makeStyles } from '@material-ui/core/styles';
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import bg4 from './images/bg4.jpg'
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 400,
    width: 900,
    marginTop: 80,
    backgroundColor: "#3a506b",
    display:"flex",
    flexDirection:"row"
  },
  control: {
    padding: theme.spacing(2),
  },
  colorText: {
    color: "#5bc0be"
  },
  card:{
    marginTop: -650
  }
}));



const Profile = () => {
  const [user, setuser] = React.useState({})
  React.useEffect(() => {
    axios.get('http://localhost:3001/api/auth', {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    }).then((result) => {
      setuser(result.data.userData)
    })
      .catch((err) => console.log(err))
  }, [])

  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  var size = Object.size(user.sessions);

  const classes = useStyles();
  return (
    <div>
      <div className="PageProfile">
        <img className="bg_image" src={bg4} />
      <Grid container className={classes.card}>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            <Grid item>
              <Paper className={classes.paper}>
                <Box style={{ backgroundColor: "#0b132b", width: "15vw", height: "55.5vh" }}>
                  <center style={{ marginRight: "80px" }}>
                    <div className="Titles">
                      <h1>{user.name}</h1>
                      <hr className="hr" />
                      <div className="sousTitre">
                        <h2>Candidat</h2></div>
                    </div></center>
                </Box>

                <div style={{ marginLeft: 50 }}>

                  <br /><br /><br />
                  <h3>
                    Nombre total de séances : <span className={classes.colorText}>{size} séances</span>
                  </h3>

                  <br />
                  <br />
                  <h3>
                    Nombre de séances de code : <span className={classes.colorText}> {(Object.size(user.sessions) > 0) ? (Object.size(user.sessions.filter(u => u[0] === 'c'))) : ''} séances</span>
                  </h3>
                  <br />
                  <br />
                  <h3>
                    Nombre de séances de conduite : <span className={classes.colorText}> {(Object.size(user.sessions) > 0) ? Object.size(user.sessions.filter(u => u[0] === 'p')) : ''} séances</span>
                  </h3>
                  <br /><br />
                  {(user.payment) ? <>
                    <h3 style={{ color: "green" }}><FcCheckmark /> Vous avez payé tout vos séances.</h3>
                    <br /> </> :
                    <h3 style={{ color: "red", fontFamily: "Gill Sans", fontSize: '1.2rem', textAlign: "left", marginRight: '5%' }}><IoMdAlert /> Vous avez des séances non payés! Veuillez vérifier votre compte.</h3>

                  }
                   <br /><br/>
          <div style={{ display: 'inline-block', marginTop: '0%', marginLeft: '50%', width: '100%' }}>
            <Link to="/user/Profile/edit" style={{ textDecoration: 'none', }}><button href="/user/Profile/edit" className='button2' style={{ width: '20%', marginLeft: '3%' }}>
              Modifier
            </button></Link>
            <Link to="/user/paiement" style={{ textDecoration: 'none', }}> <button className='button2' style={{ width: '20%', marginLeft: '3%' }}>
              Paiement
            </button></Link>
          </div>
                </div>
              </Paper>
              
            </Grid>

          </Grid>
        </Grid>
      </Grid>
      </div>

    </div>
  );
};

export default Profile;
