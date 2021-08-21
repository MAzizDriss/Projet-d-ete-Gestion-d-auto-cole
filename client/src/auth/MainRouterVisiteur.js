import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './Welcome.js';
import Navbar from './component/Navbar.js'

function MainRouterVisiteur() {

  return (
    <>
      <Router>
      <Navbar/>
        <Route exact path='/' component={Welcome}/>
      </Router>
    </>
  );
}

export default MainRouterVisiteur;