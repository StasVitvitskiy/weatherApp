import React, {PureComponent} from 'react'
import './map.css'
import map from '../images/map.png'
import {connect} from "react-redux";
import {appActions} from "../store";
export const Map = connect(
    (state) => ({
        lat: state.geocoding.results[0].bounds.northeast.lat,
        lng: state.geocoding.results[0].bounds.northeast.lng,
    }),
    appActions
    )(class Map extends PureComponent {
        render() {
            return <div className='map-container'>
                <div>
                    <img srcSet={map} alt=""/>
                    <div className='coords'>
                        <div>Latitude: {this.props.lat}'' N</div>
                        <div>Longitude: {this.props.lng}'' W</div>
                    </div>
                </div>
            </div>
        }
})