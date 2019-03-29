import React from 'react';
import ReactDOM from 'ReactDOM';
import { Router, Route, Link, browserHistory } from 'react-router';
import App from './App/index.jsx';

ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </Router>
), document.getElementById('app'));