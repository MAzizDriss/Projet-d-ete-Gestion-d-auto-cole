import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import homeUser from "../user/home"

function MainRouterUser() {


  return (
    <>
      <Router>
        <Route exact path='/user/home' component={homeUser}/>
      </Router>
    </>
  );
}

export default MainRouterUser;