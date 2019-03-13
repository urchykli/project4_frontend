import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';

import Home from './Home'
import Show from './Show'


class App extends Component {
  constructor() {
    super();

    this.state = {
        city: null,
        state: null,
        breweries: [],
        marker: {
            latitude: null,
            longitude: null
        },
        realBrewery: [],
        name: false,
        brewery: null
    };
    this.setBrewery = this.setBrewery.bind(this)
}

handleCityInput(e) {
    this.setState({
        city: e.target.value
    });
}

handleStateInput(e) {
    this.setState({
        state: e.target.value
    });
}
handleSearchSubmit(e) {
    e.preventDefault();
    const url = `https://api.openbrewerydb.org/breweries?by_city=${
        this.state.city
    }&by_state=${this.state.state}`;
    console.log(url);
    axios
        .get(url)
        .then(res => {
            this.setState({
                breweries: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });
		this.state.realBrewery = []
		if(!this.state.name) {
		for (let i = 0; i < this.state.breweries.length; i++) {
			if (this.state.breweries[i].longitude !== null) {
				this.setState({
					realBrewery: realBrewery.push(this.state.breweries[i]
				})
					this.state.realBrewery.push(this.state.breweries[i])
					this.state.name = true
			}
			console.log(this.state.realBrewery);
		}
		}
}
setBrewery(brewery) {
  this.setState({brewery: brewery})
}

  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to=""></Link> */}
        </nav>
        <main>
          <Route path="/" component={Home}/>
          <Route path="/:id" component={Show} />
        </main>
          <Route path="/" render={(routerProps) => <Home {...routerProps} {...this.state}/>} />
          <Route path="/:id" render={(routerProps) => <Show setBrewery={this.setBrewery} {...routerProps} {...this.state} />} />
      </div>
    )
  }
}

export default App;

