import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Navbar from './component/Navbar.js'
import Footer from './component/Footer.js'
import Signup from './Signup'
import Signin from './Signin'

function MainRouterVisiteur() {

  return (
    <>
      <Router>
      <Navbar/>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Signin} />
        <Footer/>
      </Router>
    </>
  );
}

export default MainRouterVisiteur;