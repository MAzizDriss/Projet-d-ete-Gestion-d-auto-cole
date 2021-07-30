import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Employes from './pages/Employes/Employes';
import Candidats from './pages/Candidats/Candidats';
import Calendrier from './pages/Calendrier/Calendrier';
import Vehicules from './pages/Vehicules/Vehicules';
import GestionCandidats from './pages/Candidats/gestion';
import Tests from './pages/Candidats/tests';
import AddSession from './pages/Calendrier/AddSession';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'  component={Home}/>
          <Route exact path='/Calendrier' component={Calendrier} />
          <Route exact path='/Candidats/gestion' component={GestionCandidats} />
          <Route exact path='/Candidats/Tests' component={Tests} />
          <Route exact path='/Candidats' component={Candidats} />
          <Route exact path='/Employes' component={Employes} />
          <Route exact path='/Vehicules' component={Vehicules} />
          <Route exact path='/Sessions/add' component={AddSession} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
