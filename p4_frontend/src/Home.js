import React, { Component } from "react";
import './Home.css'
import Map from './Map'


class Home extends Component {
    constructor(props) {
        super(props)

    //     this.state = {
    //         city: null,
    //         state: null,
    //         breweries: [],
    //         marker: {
    //             latitude: null,
    //             longitude: null
    //         },
    //         realBrewery: [],
    //         name: false
    //     };
    this.handleCityInput = this.handleCityInput.bind(this)
    this.handleStateInput = this.handleStateInput.bind(this)
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    handleCityInput(e) {
        this.props.onCityInput(e.target.value);
    }

    handleStateInput(e) {
        this.props.onStateInput(e.target.value);
    }
    handleSearchSubmit(e) {
        e.preventDefault();
        this.props.onSearchSubmit(e.target.value);
        console.log(this.props.city)
        console.log(this.props.state)
        console.log(this.props.realBrewery)
    }


    render() {

        return (
            <div className="search">
                <form
                    className="search-form"
                    onSubmit={e => this.handleSearchSubmit(e)}
                >
                    <h3 className='welcome'>Enter a city and state to find breweries near you!</h3>
                    <p>
                        <label>City: </label>
                        <input type="text" placeholder="City..." value={this.props.city} onChange={this.handleCityInput} />
                        <label>State: </label>
                        <input type="text" placeholder="State..." value={this.props.state} onChange={this.handleStateInput} />
                    <input type="submit" value="Submit" />
                    </p>
                </form>
                <Map realBrewery={this.props.realBrewery} latitude={this.props.latitude} longitude={this.props.longitude} />

            </div>
        );
    }
}

export default Home;
