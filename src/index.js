import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import Tips from './Tips/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/tips">
        <Tips />
      </Route>
    </Switch>
  </Router>
  , document.getElementById('root'));
