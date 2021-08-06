import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import NavbarE from '../everyone/Components/NavbarEveryone';
import Footer from './Components/Footer';

function MainRouter() {
  return (
    <>
      <Router>
          <NavbarE/>
        <Switch>
          <Route exact path='/'  component={Home}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default MainRouter;