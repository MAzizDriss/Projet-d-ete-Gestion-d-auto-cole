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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 250,
    width: 250,
    marginTop: 80,
    backgroundColor: "#3a506b"
  },
  control: {
    padding: theme.spacing(2),
  },
  colorText: {
    color: "#5bc0be"
  }
}));



const Profile = () => {
  const [user, setuser] = React.useState({})
  const [post, setpost] = React.useState({})
  React.useEffect(() => {
    axios.get('http://localhost:3001/api/test', {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    }).then((result) => {
      setpost(result.data.posts)
      setuser(result.data.user.userData)
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
      <div className="Page">
        <img className="bg_image" src={bg4} />
      </div>

      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '40rem', height: '37rem', marginTop: -680, marginLeft: 490, backgroundColor: "#f2f2f2" }}
        >
          <Grid style={{ backgroundColor: "#3a506b", }}>
            <Box style={{ backgroundColor: "#0b132b", padding: 70 }}>
           <center style={{marginRight:"80px"}}>   <div className="Title">
                <h1>{user.name}</h1>
                <hr className="hr" />
                <div className="sousTitre">
                  <h2>Candidat</h2></div>
              </div></center>
            </Box>
          </Grid>

          <div style={{ marginLeft: 50 }}>

            <br /><br />
            <h3>
              Nombre total de séances : <span className={classes.colorText}>{size} séances</span>
            </h3>

            <br />
            <br />
            <h3>
              Nombre de séances de code : <span className={classes.colorText}> {(Object.size(user.sessions) > 0) ? (Object.size(user.sessions.filter(u => u[0] === 'c'))) : ''} séances</span>
            </h3>
            <br/>
            <br/>
            <h3>
              Nombre de séances de conduite : <span className={classes.colorText}> {(Object.size(user.sessions) > 0) ? Object.size(user.sessions.filter(u => u[0] === 'p')) : ''} séances</span>
            </h3>
            <br/><br/>
            {(user.payment) ? <>
                    <h3 style={{color:"green"}}><FcCheckmark/> Vous avez payé tout vos séances.</h3>
                    <br /> </> : 
                    <h3 style={{color:"red",fontFamily:"Gill Sans", textAlign:"center"}}><IoMdAlert/> Vous avez des séances non payés! Veuillez vérifier votre compte.</h3>
                    }
          </div>
        </Box>
      </Grid>

    </div>
  );
};

export default Profile;
