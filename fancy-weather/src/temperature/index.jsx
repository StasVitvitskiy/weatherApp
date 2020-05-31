import React, {PureComponent} from 'react'
import './temperature.css'
import {connect} from "react-redux";
import partlyCloudy from '../images/partlyCloudyDay.png'
import sunny from '../images/sunny.png'
import rain from '../images/rain.png'
export const Temperature = connect(
    (state) => ({
        temperature: state.weather.main.temp,
        description: state.weather.weather[0].description,
        feels_like: state.weather.main.feels_like,
        wind: state.weather.wind.speed,
        humidity: state.weather.main.humidity,
    })
)(class Temperature extends PureComponent {
    get icon(){
        if(String(this.props.description).includes('rain')) {
            return rain;
        }
        if(String(this.props.description).includes('sun') || String(this.props.description).includes('clear')) {
            return sunny;
        }
        if(String(this.props.description).includes('part')) {
            return partlyCloudy;
        }
    }
    render() {
        return <div className='temperature'>
            <div className='temperature-container'>
               <div className='temp_num'>
                   <h1> {this.props.temperature > 0 ? '+' : ''}{Math.round(this.props.temperature)}°</h1>
               </div>
                <div className='temp_info'>
                    <img src={this.icon} alt=""/>
                    <span>
                        <h2>{String(this.props.description).toUpperCase()}</h2>
                        <h2>FEELS LIKE: {String(this.props.feels_like).toUpperCase()}°</h2>
                        <h2>WIND: {String(this.props.wind).toUpperCase()} M/S</h2>
                        <h2>HUMIDITY: {String(this.props.humidity).toUpperCase()}%</h2>
                    </span>
                </div>
            </div>
        </div>
    }
})