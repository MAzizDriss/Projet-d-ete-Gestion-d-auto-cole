import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { FaBars } from 'react-icons/fa'
import { Button } from '@material-ui/core';
import { FiLogOut } from 'react-icons/fi'
import { useHistory } from 'react-router';
import './Navbar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '9vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: '#060b26',
    height: "9vh"
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    marginLeft: 450,
   marginTop: 35,
   marginRight: 400
  },
  icon: {
    color: '#f2f2f2',
    fontSize: '2rem',
    marginLeft: -200

  },
  colorText: {
    color: '#52ab98',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',

  },
  goDown: {
    color: '#52ab98',
    fontSize: '4rem',
  },
  navbarItems: {
    display: "flex",
    flexDirection: "row"
  },
  buttonLogout: {
    color: "#f2f2f2",
    display:"flex",
    flexDirection:"row",
    size: "500rem",
    marginRight:"-80vw"
  }
}));
export default function Header({ sidebar, setSidebar }) {
  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  const logout = () => {
    localStorage.setItem('isAuth', false)
    localStorage.setItem('token', '')
    window.location.replace('/login')
  }
  const classes = useStyles();

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} >
        <Toolbar className={classes.appbarWrapper}>
          <IconButton>
            <FaBars onClick={showSidebar} className="bars" />
          </IconButton>
          <div className={classes.navbarItems}>
            <h1 className={classes.appbarTitle}>
              Auto école<span className={classes.colorText}>SITI</span>
            </h1>

            <div className={classes.buttonLogout} onClick={logout}>
              <h4 className="deconnectionUser">Se déconnecter
              <FiLogOut style={{ marginLeft:10 }} />
              </h4>
              <FiLogOut className="deconnectionIconUser" /></div>
          </div>
        </Toolbar>
      </AppBar>


    </div>
  );
}