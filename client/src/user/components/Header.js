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
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    marginLeft: 450
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
    left: 400
  }
}));
export default function Header({ sidebar, setSidebar }) {
  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();
  const logout = () => {
    localStorage.setItem('isAuth', false)
    history.push("/login")

  }
  const classes = useStyles();

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} >
        <Toolbar className={classes.appbarWrapper}>
          <IconButton>
            <FaBars onClick={showSidebar} className={classes.icon} className="bars" />
          </IconButton>
          <div className={classes.navbarItems}>
            <h1 className={classes.appbarTitle}>
              Auto école<span className={classes.colorText}>SITI</span>
            </h1>

            <Button className={classes.buttonLogout} onClick={logout}><h4 className="deconnection">Se déconnecter</h4><FiLogOut style={{ marginLeft: 10, marginTop: 2 }} /></Button>
          </div>
        </Toolbar>
      </AppBar>


    </div>
  );
}