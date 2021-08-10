import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Serv from './pages/home/services';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { Particles } from 'react-particles-js';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '0vh',
    fontFamily: 'Nunito',
    background: '#060b26'
  },
  root1:{
    height: '100vh',
  },
  appbar: {
    background: '#060b26',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    marginLeft:450
  },
  icon: {
    color: '#f2f2f2',
    fontSize: '2rem',
    marginLeft:-200

  },
  colorText: {
    color: '#52ab98',
  },
  container: {
    textAlign: 'center',
    marginTop:-500,
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#52ab98',
    fontSize: '4rem',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    marginTop:-1000

  },
  top: {
    color: '#6fffe9',
    animationDuration: '550ms',
    position: 'absolute',
    left: 800,
    top:320,
  },
  circle: {
    strokeLinecap: 'round',
  },
}));
export default function Home(props) {

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  const classes = useStyles();


  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
          setDone(true);
      
    }, 2000);
  }, []);
  return (

    <>
    {!done ? (
     <CircularProgress
     variant="indeterminate"
     className={classes.top}
     size={70}
     thickness={5}
     {...props}
     value={100}
   />
   
    ) : (
      
   


    <div  className={classes.root1}>
      <div className={classes.root}>
        <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Bienvenu sur <br />
            auto école<span className={classes.colorText}>SITI</span>
          </h1>
          <Scroll to="service" smooth={true}>
            <IconButton>
              <ExpandMoreIcon  className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
      </div>
      <CssBaseline />
      <Serv />
    </div>


)}
</>
  );
}