import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu'

import Home from './Screens/Home'
import YesOrNot from './Screens/YesOrNot'
import West from './Screens/West'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <div>
        
        <Menu />

        <Switch>


          <Route path="/yesOrNot">
            <YesOrNot />
          </Route>

          <Route path="/west">
            <West />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
