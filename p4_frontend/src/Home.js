import React, { Component } from "react";
import axios from "axios";
import Map from "./Map";
import { Link } from "react-router-dom";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import icon from "./location.svg";


class Home extends Component {
    constructor() {
        super();
        this.markers = null
        this.state = {
            city: null,
            state: null,
            breweries: [],
            markers: {
                latitude: [],
                longitude: []
            },
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


componentDidUpdate() {
    this.state.realBrewery = []
    if(!this.state.name) {
    for (let i = 0; i < this.state.breweries.length; i++) {
        if (this.state.breweries[i].longitude !== null) {
                this.state.realBrewery.push(this.state.breweries[i])
                this.state.name = true
        }
        console.log(this.state.realBrewery);
    }
    this.markers = this.state.realBrewery.map(brewery => {
        return (
            <Marker
                latitude={Number(brewery.latitude)}
                longitude={Number(brewery.longitude)}
                offsetLeft={-20}
                offsetTop={-10}
            >
                {/* <Link to={brewery.id}> */}
                    <img src={icon} width="15" height="50" />
                {/* </Link> */}
                
            </Marker>
            // var coordinates = [Number(brewery.latitude), Number(brewery.longitude)]
            // new ReactMapGL.Marker(document.createElement('div'))
            // .setLngLat(coordinates)
            // .addTo(map);
        );
    });
    }
}
// renderCityMarker = this.state.realBrewery.map((brewery, index) => {
//     return (
//       <Marker 
//         key={`marker-${index}`}
//         longitude={Number(brewery.longitude)}
//         latitude={Number(brewery.latitude)} offsetLeft={-20} offsetTop={-10}>
//         <img src={icon} width="15" height="50" />
//       </Marker>
//     );
//   }
// )

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
                <Map />
                {/* { this.state.realBrewery.map(this._renderCityMarker) } */}
            </div>
        );
    }
}

export default Home;
