import React, {PureComponent} from 'react'
import './forecast.css'
import cloudy from '../images/partlyCloudyDay.png'
import rain from '../images/rain.png'
import {connect} from "react-redux";
import {appActions} from "../store/reducer";
export const Forecast = connect(
    () => {},
    appActions
)(class Forecast extends PureComponent {
    render() {
        return <div className='forecast'>
            <div>
                <div>
                    <h3>Friday</h3>
                </div>
                <div>
                    <h3>+24°</h3>
                    <img srcSet={cloudy} alt=""/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Saturday</h3>
                </div>
                <div>
                    <h3>+20°</h3>
                    <img srcSet={rain} alt=""/>
                </div>
            </div>
            <div>
                <div>
                    <h3>Sunday</h3>
                </div>
                <div>
                    <h3>+18°</h3>
                    <img srcSet={rain} alt=""/>
                </div>
            </div>
        </div>
    }
})
