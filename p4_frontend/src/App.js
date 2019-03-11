import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import Map from './Map'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to=""></Link>
          <Link to=""></Link>
        </nav>
        <main>
          <Route path="/" component={Map}/>
          <Route path="/:id" component={Show} />
        </main>
      </div>
    )
  }
}

export default App;

