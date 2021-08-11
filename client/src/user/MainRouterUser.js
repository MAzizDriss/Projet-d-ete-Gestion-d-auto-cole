import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../user/components/Header';
import Sidebar from '../user/components/Sidebar';
import homeUser from "../user/pages/home/home"
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Test from '../auth/Test';
import Calendrier from './pages/Calendrier/Calendrier';
import Profile from './pages/Profile/Profile'
function MainRouterUser() {
  const [sidebar, setSidebar] = useState(false);


  return (
    <>
      <Router>
        <Header  sidebar={sidebar} setSidebar={setSidebar} />
        <Route exact path='/user/home' component={homeUser}/>
        <Route exact path='/user/Calendrier' component={Calendrier}/>
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/user/Profile' component={Profile}/>
          <Route exact path='/login' component={Signin} />
          <Route exact path='/test' component={Test} />
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
  
      </Router>
    </>
  );
}

export default MainRouterUser;