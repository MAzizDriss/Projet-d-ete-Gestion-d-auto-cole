import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  colorText: {
    color: '#52ab98',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: '2rem',
    marginLeft:"38vw",
    marginTop:"4vh"
  },
  navbarItems: {
    display:"flex",
    textAlign:"center",
    justifyContent:"center"

  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="absolute" style={{backgroundColor:"#0b132b", height:"9vh", position:"fixed"}}>
        <Toolbar>
        <div className={classes.navbarItems}>
            <h1 className={classes.appbarTitle}>
              Auto école<span className={classes.colorText}>SITI</span>
            </h1>
          </div>    
              </Toolbar>
      </AppBar>
    </div>
  );
}
