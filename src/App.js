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
import StorePage from './components/StorePage/StorePage';
import YearsPage from './components/YearsPage/YearsPage';

//Pieces
import PiecesPage from './components/Pieces/PiecesPage/PiecesPage';
import ShowPieces from './components/Pieces/ShowPieces/ShowPieces';
//Project
import ProjectsPage from './components/Project/ProjectsPage/ProjectPage';
import ShowProjects from './components/Project/ShowProjects/ShowProjects';

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
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

        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
