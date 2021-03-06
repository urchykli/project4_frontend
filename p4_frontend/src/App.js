import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import './App.css';
import axios from "axios";

import Home from './Home'
import Show from './Show'
import Map from './Map'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        city: null,
        state: '',
        breweries: [],
		latitude: [],
		longitude: [],
        realBrewery: [],
        name: false,
        brewery: ''
    };
	this.setBrewery = this.setBrewery.bind(this)
	this.handleCityInput = this.handleCityInput.bind(this)
	this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
	this.handleStateInput = this.handleStateInput.bind(this)
}

handleCityInput(city) {
    this.setState({
        city: city
    });
}

handleStateInput(state) {
    this.setState({
        state: state
    });
}
handleSearchSubmit(e) {
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
	}

	componentDidUpdate(){
			if (!this.state.name) {
				for (let i = 0; i < this.state.breweries.length; i++) {
					if (this.state.breweries[i].longitude !== null) {
						this.setState(prevState => ({
							realBrewery: [...prevState.realBrewery, this.state.breweries[i]]
						}));
						this.setState(prevState => ({
							latitude: [...prevState.latitude, Number(this.state.breweries[i].latitude)]
						}));
						this.setState(prevState => ({
							longitude: [...prevState.longitude, Number(this.state.breweries[i].longitude)]
						}));
						this.state.name = true;
					}
				}
			}
			console.log(this.state.realBrewery);
}
setBrewery(brewery) {
  this.setState({brewery: brewery})
  console.log(this.state.brewery)
}



  render() {
    return (
      <div>
        <nav>
          <Link to="/" className='header'>Home</Link>
        </nav>
        <main>
          <Route path="/" exact render={(routerProps) => <Home city={this.state.city}
          state={this.state.state}
          onCityInput={this.handleCityInput}
		  onStateInput={this.handleStateInput}
		  onSearchSubmit={this.handleSearchSubmit}{...routerProps} {...this.state}/>} />
		  {/* <Map realBrewery={this.state.realBrewery} latitude={this.state.latitude} longitude={this.state.longitude} /> */}

        </main>
          <Route path="/:id" exact render={(routerProps) => <Show {...routerProps} {...this.state} setBrewery={this.setBrewery} />} />
      </div>
	)
  }
}

export default App;