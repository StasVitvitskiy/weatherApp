import React, {PureComponent} from 'react'
import './map.css'
import map from '../images/map.png'
import {connect} from "react-redux";
import {appActions, mapBoxApi} from "../store";
export const Map = connect(
    (state) => ({
        lat: state.geocoding.location.latitude,
        lng: state.geocoding.location.longitude,
    }),
    appActions
    )(class Map extends PureComponent {
        componentDidUpdate() {
            setTimeout(() => {
                mapboxgl.accessToken = mapBoxApi.key;
                new mapboxgl.Map({
                    container: 'map', // container id
                    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                    center: [this.props.lng, this.props.lat], // starting position [lng, lat]
                    zoom: 9 // starting zoom
            }, 1000)
            });
        }

    render() {
            return <div className='map-container'>
                <div>
                    <div id="map" />
                    <div className='coords'>
                        <div>Latitude: {this.props.lat}'' N</div>
                        <div>Longitude: {this.props.lng}'' W</div>
                    </div>
                </div>
            </div>
        }
})