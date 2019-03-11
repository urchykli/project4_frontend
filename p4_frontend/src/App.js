import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';

import Home from './Home'
import Show from './Show'


class App extends Component {

  render() {
    return (
      <div>
        <nav>
          <Link to=""></Link>
          <Link to=""></Link>
        </nav>
        <main>
          <Route path="/" component={Home}/>
          <Route path="/:id" component={Show} />
        </main>
      </div>
    )
  }
}

export default App;

