import React, {PureComponent} from 'react'
import './map.css'
import map from '../images/map.png'
import {connect} from "react-redux";
import {appActions} from "../store/reducer";
export const Map = connect(
    () => {},
    appActions
    )(class Map extends PureComponent {
        render() {
            return <div className='map-container'>
                <div>
                    <img srcSet={map} alt=""/>
                    <div className='coords'>
                        <div>Latitude: 48° 5' 1.73508'' N</div>
                        <div>Longitude: 121° 58' 8.59512'' W</div>
                    </div>
                </div>
            </div>
        }
})