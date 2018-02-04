import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" render={() => 'home'} />
            <Route path="/test" render={() => 'test'} />
            <Route render={() => 'Not found'} />
        </Switch>
      </Router>
    );
  }
}

export default App;
