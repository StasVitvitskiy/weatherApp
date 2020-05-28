import React, {PureComponent} from 'react'
import './temperature.css'
import {connect} from "react-redux";
import {appActions} from "../store/reducer";
import icon from '../images/partlyCloudyDay.png'
export const Temperature = connect(
    () => {},
    appActions
)(class Temperature extends PureComponent {
    render() {
        return <div className='temperature'>
            <div className='temperature-container'>
               <div className='temp_num'>
                   <h1> +18°</h1>
               </div>
                <div className='temp_info'>
                    <img srcSet={icon} alt=""/>
                    <h2>PARTLY CLOUDY
                        FEELS LIKE: +18°
                        WIND: 1 M/S
                        HUMIDITY: 60%</h2>
                </div>
            </div>
        </div>
    }
})