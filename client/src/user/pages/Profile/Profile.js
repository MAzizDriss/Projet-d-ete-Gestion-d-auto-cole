import React from "react";
import './Profile.css'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import avatar from './avatar.png'
import axios from 'axios'
import FormCard from './FormCard'
import { Badge } from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import { Chip } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

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
  const SessionCount = (sessions) => {
    {
      sessions.map((value) => (
        <Grid key={value} item>
          <h1> ho
          </h1>
        </Grid>
      ))
    }
  };
  Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  var size = Object.size(user.sessions);

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  return (
    <div>
      <div className="Page"></div>

      <Grid container>
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: '60rem', height: '35rem', marginTop: -680, marginLeft: 310 }}
        >
          <Grid style={{ backgroundColor: "#3a506b", }}>
            <Box style={{ backgroundColor: "#0b132b", padding: 70 }}>
              <div className="Title">
                <h1>{user.name}</h1>
                <hr className="hr" />
                <div className="sousTitre">
                  <h2>Candidat</h2></div>
              </div>
            </Box>
          </Grid>

          <div>

          </div>
          <div>
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={5}>
                    <div >  
                    <Grid >
                      <Paper className={classes.paper}>
                        <br/>
                        <h2 style={{marginLeft:35, color:"#f2f2f2", marginTop:-8}}>Séances réalisées</h2>
                        <hr style={{marginTop:10}}/>
                        </Paper>
                    </Grid>
                    </div>
                    <div>  
                    <Grid style={{marginLeft:15}}>
                      <Paper className={classes.paper} >
                        <br/>
                        <h2 style={{marginLeft:69, color:"#f2f2f2", marginTop:-8}}>Payement</h2>
                        <hr style={{marginTop:10, marginBottom:35}}/>

                       <div style={{marginLeft:20, marginRight:20, color:"", textAlign:"center"}}>
                        {(user.payment) ? 
                        <>
                    <h3>Vos séances sont toutes payées.</h3>
                    </> : 
                    <h3>Vous avez des séances non payées! <br/>
                      Veuillez vérifier votre compte..</h3>}
                        </div>
                      </Paper>
                    </Grid>
                    </div>
                    <div>  
                    <Grid style={{marginLeft:15}}>
                      <Paper className={classes.paper} >
                      <br/>
                        <h2 style={{marginLeft:48, color:"#f2f2f2", marginTop:-8}}>Tests réalisés</h2>
                        <hr style={{marginTop:10}}/>
                        <h3>{size}</h3>
                        </Paper>
                    </Grid>
                    </div>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Grid>

    </div>
  );
};

export default Profile;
