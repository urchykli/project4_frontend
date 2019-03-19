import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Map.css";
// import axios from "axios";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import icon from "./beer_icon.png";
// import Show from "./Show";


const TOKEN =
    "pk.eyJ1IjoidXJjaHlrbGkiLCJhIjoiY2p0Mzk3d2c2MGtnNDN5bHNqaDByOTh0cyJ9.w36OVXzFUTpeyqf0vcvjDA";
const navStyle = {
    position: "absolute",
    top: 0,
    left: 0,
	padding: "10px",
};
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.785164,
                longitude: -100,
                zoom: 3.5,
                bearing: 0,
                pitch: 0,
                width: '100vw',
                height: 500
            },
            popupInfo: []
        };
    }

// from https://github.com/uber/react-map-gl/blob/4.0-release/examples/controls/src/app.js
    _updateViewport = viewport => {
        this.setState({ viewport });
    };
    render() {
        let markers = this.props.realBrewery.map((brewery, index) => {
            return (
                <Marker
                    latitude={Number(brewery.latitude)}
                    longitude={Number(brewery.longitude)}
                    offsetLeft={-20}
                    offsetTop={-10}
                    key={`marker-${index}`}
                >
                    <img className='marker'
                        src={icon}
                        width="20"
                        height="27"
                        onClick={() =>
                            this.setState(prevState => ({
                                popupInfo: [...prevState.popupInfo, brewery]
                            }))
                        }
                    />
                </Marker>
            );
        });
        let pop = this.state.popupInfo.map((info, index) => {
            return (
                info && (
                    <Popup
                        tipSize={5}
                        anchor="top"
                        longitude={Number(info.longitude)}
                        latitude={Number(info.latitude)}
                        closeOnClick={false}
                        onClose={() => this.setState({ popupInfo: [] })}
                    >
                        <div>
						<Link className="popup"to={"/"+ info.id} onClick={() => this.setBrewery({brewery: info})}>{info.name}</Link>
						</div>
                        {/* <CityInfo info={popupInfo} /> */}
                    </Popup>
                )
            );
        });
        // console.log(id)
        console.log(this.props.brewery);
        console.log(this.state.popupInfo);
        console.log(this.props.realBrewery);

        const { viewport } = this.state;

        return (
            <ReactMapGL
			className='map'
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/urchykli/cjt4cqf1x1kpt1frx7xj7g3yq"
                onViewportChange={this._updateViewport}
            >
                <div className="nav" style={navStyle}>
                    <NavigationControl
                        onViewportChange={this._updateViewport}
                    />
                </div>
                {markers}
                {pop}
            </ReactMapGL>
        );
    }
}

export default Map;
