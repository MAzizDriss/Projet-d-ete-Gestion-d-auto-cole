import React from "react";
import './Profile.css'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import avatar from './avatar.png'
import axios from 'axios'
import FormCard from './FormCard'
import { Badge } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'
import bg4 from './images/bg4.jpg'

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
        <img className="bg_image" src={bg4}/>
      </div>

      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '35rem', height: '37rem', marginTop: -680, marginLeft: 490, backgroundColor:"#3a506b" }}
        >
          <Grid style={{ backgroundColor: "#3a506b", }}>
            <Box style={{ backgroundColor: "#0b132b", padding: 70, textAlign:"center" }}>
              <div className="Title">
                <h1>{user.name}</h1>
                <hr className="hr" />
                <div className="sousTitre">
                  <h2>Candidat</h2></div>
              </div>
            </Box>
          </Grid>

          <div>
          <Typography variant="body2" component="p">
                    Nombre total de séances réalisés : {size}
                    <br />
                    Nombre de séances : {Object.size(user.sessions)}
                    <br/>
                    code: {(Object.size(user.sessions)>0)?(Object.size(user.sessions.filter(u=> u[0] ==='c'))):''}    ;conduite: {(Object.size(user.sessions)>0)?user.sessions.filter(u=>u[0]==='p').length:''}
                </Typography>
          </div>
        </Box>
      </Grid>

    </div>
  );
};

export default Profile;
