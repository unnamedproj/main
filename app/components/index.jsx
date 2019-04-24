import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App/index.jsx';
import Login from './Login/index.jsx';
import Signup from './Signup/index.jsx';
import Homepage from './Homepage/index.jsx';
import Profile from './Profile/index.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
      <Route path="/homepage" component={Homepage}></Route>
      <Route path="/profile" component={Profile}></Route>
    </Router>
), document.getElementById('app'));g