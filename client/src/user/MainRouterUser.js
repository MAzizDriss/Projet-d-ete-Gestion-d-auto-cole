import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../user/components/Header';
import Sidebar from '../user/components/Sidebar';
import homeUser from "../user/home"

function MainRouterUser() {
  const [sidebar, setSidebar] = useState(false);


  return (
    <>
      <Router>
        <Header  sidebar={sidebar} setSidebar={setSidebar} />
        <Route exact path='/user/home' component={homeUser}/>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </Router>
    </>
  );
}

export default MainRouterUser;