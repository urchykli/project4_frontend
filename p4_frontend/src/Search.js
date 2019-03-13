import React, { Component } from 'react';
import axios from "axios";

class Search extends Component {
	constructor() {
        super();
        this.state = {
            city: null,
            state: null,
			breweries: [],
			realBrewery: [],
			name: false
        };
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
		const url = `https://api.openbrewerydb.org/breweries?by_city=${this.state.city}&by_state=${this.state.state}`;
		console.log(url);
		axios.get(url)
			.then(res => {
				this.setState({
					breweries: res.data
				});
			})
			.catch(err => {
				console.log(err);
			});
			console.log(this.state.breweries)
		}
	filteredBreweries(){
		if(!this.state.name) {
		for (let i = 0; i < this.state.breweries.length; i++) {
			if (this.state.breweries[i].longitude !== null) {
				this.setState({
					realBrewery: this.state.breweries[i]
				})
				this.state.name = true
			}
		}
		console.log(this.state.realBrewery)
	}
	}


	render() {
		return (
			<div className="search">
                <form
                    className="search-form"
                    onSubmit={e => this.handleSearchSubmit(e)}
                >
                    <h3>Enter a city and state to find breweries near you!</h3>
                    <p>
                        <label>City: </label>
                        <textarea onChange={e => this.handleCityInput(e)} />
                    </p>
                    <p>
                        <label>State: </label>
                        <textarea onChange={e => this.handleStateInput(e)} />
                    </p>
                    <input type="submit" value="Submit" />
                </form>
				<div>
					{this.filteredBreweries(this.state.breweries)}
				</div>
            </div>
		);
	}
}

export default Search;