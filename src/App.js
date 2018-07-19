import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import YearsPage from './components/YearsPage/YearsPage';
//Store
import StorePage from './components/Store/StorePage/StorePage';
import ShowStore from './components/Store/ShowStore/ShowStore';
//Pieces
import PiecesPage from './components/Pieces/PiecesPage/PiecesPage';
import ShowPieces from './components/Pieces/ShowPieces/ShowPieces';
import SellPieces from './components/Pieces/SellPieces/SellPieces';
import EditPieces from './components/Pieces/EditPieces/EditPieces';
//Project
import ProjectsPage from './components/Project/ProjectsPage/ProjectPage';
import ShowProjects from './components/Project/ShowProjects/ShowProjects';
//Customer View
import HermanLeank from './components/CustomerView/HermanLeank/HermanLeank';
import Menu from './components/CustomerView/Menu/Menu';
import Contact from './components/CustomerView/Contact/Contact';
import Store from './components/CustomerView/Store/Store';
import Timeline from './components/CustomerView/Timeline/Timeline';

import './styles/main.css';

const App = () => (
  <div>
   
    <Router>
      <Switch>
        <Redirect exact from="/" to="/hermanleank" />
        <Route
          path="/hermanleank"
          component={HermanLeank}
        />
        <Route
          path="/menu"
          component={Menu}
        />
            <Route
          path="/contact"
          component={Contact}
        />
            <Route
          path="/storefront"
          component={Store}
        />
            <Route
          path="/timeline"
          component={Timeline}
        />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/pieces"
          component={PiecesPage}
        />
        <Route
          path="/store"
          component={StorePage}
        />
        <Route
          path="/projects"
          component={ProjectsPage}
        />
        <Route
          path="/years"
          component={YearsPage}
        />
        <Route
          path="/showPieces"
          component={ShowPieces}
        />
        <Route 
        path='/showProjects'
        components={ShowProjects}
        />
        <Route
        path='/showStore'
        components={ShowStore}
        />
        <Route
        path='/sellPieces'
        components={SellPieces}
        />
          <Route
        path='/editPieces'
        components={EditPieces}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
