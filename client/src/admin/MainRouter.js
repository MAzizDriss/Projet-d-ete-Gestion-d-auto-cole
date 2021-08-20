import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Employes from './pages/Employes/Employes';
import Candidats from './pages/Candidats/Candidats';
import Calendrier from './pages/Calendrier/Calendrier';
import Vehicules from './pages/Vehicules/Vehicules';
import AddSession from './pages/Calendrier/AddSession';
import Formulaire from './pages/Candidats/Formulaire';
import EditSession from './pages/Calendrier/EditSession';
import FormulaireV from './pages/Vehicules/Formulaire';
import Ajout from './pages/Vehicules/ajout';
import AddEmployee from './pages/Employes/AddEmployee';
import EditEmployee from './pages/Employes/EditEmployee';
import Footer from './components/Footer';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Test from '../auth/Test';
import ProtectedAdminRoute from '../auth/ProtectedRoute';
import Sidebar from './components/Sidebar';

function MainRouter() {
  const [sidebar, setSidebar] = useState(false);


  return (
    <>
      <Router>
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <Switch>
          <ProtectedAdminRoute exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Signin} />
          <Route exact path='/test' component={Test} />
          <ProtectedAdminRoute exact path='/Calendrier' component={Calendrier} />
          <ProtectedAdminRoute exact path='/Candidats' component={Candidats} />
          <ProtectedAdminRoute exact path='/Employes' component={Employes} />
          <ProtectedAdminRoute exact path='/Vehicules' component={Vehicules} />
          <ProtectedAdminRoute exact path='/Sessions/add' component={AddSession} />
          <ProtectedAdminRoute exact path='/Sessions/edit/:ref' component={EditSession} />
          <ProtectedAdminRoute exact path='/Candidats/Formulaire/:id' component={Formulaire} />
          <ProtectedAdminRoute exact path='/Vehicules/Formulaire/:id' component={FormulaireV} />
          <ProtectedAdminRoute exact path='/Vehicules/ajouter' component={Ajout} />
          <ProtectedAdminRoute exact path='/Employes/add' component={AddEmployee} />
          <ProtectedAdminRoute exact path='/Employes/edit/:id' component={EditEmployee} />
        </Switch>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <Footer />
      </Router>
    </>
  );
}

export default MainRouter;