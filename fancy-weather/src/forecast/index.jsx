import React, {PureComponent} from 'react'
import './forecast.css'
import rain from '../images/rain.png'
import {connect} from "react-redux";
import {appActions} from "../store";
import sunny from "../images/sunny.png";
import partlyCloudy from "../images/partlyCloudyDay.png";

export const Forecast = connect(
    (state) => ({
        lang: state.lang,
        forecast: state.forecast.list,
        units: state.units
    }),
    appActions
)(class Forecast extends PureComponent {
    get formatter(){
        return new Intl.DateTimeFormat(this.props.lang, {
            weekday: "long",
        });
    }
    getIcon(description) {
        if(description.toLowerCase().includes('rain')) {
            return rain;
        }
        if(description.toLowerCase().includes('sun') || description.toLowerCase().includes('clear')) {
            return sunny;
        }
        if(description.toLowerCase().includes('part') || description.toLowerCase().includes('clouds')) {
            return partlyCloudy;
        }
    }
    getTemperature(temperature){
        if(this.props.units === 'F') {
            return (temperature* 9/5) + 32;
        }
        return temperature;
    }
    render() {
        return <div className='forecast'>
            {this.props.forecast.map(el => ({...el, dt_txt: el.dt_txt.split(' ')[0]}))
                .filter((el, index, self) => self.findIndex(value => value.dt_txt === el.dt_txt) === index)
                .slice(0,3).map(el => <div key={el.dt_txt}>
                <div>
                    <h3>{this.formatter.format(new Date(el.dt_txt))}</h3>
                </div>
                <div>
                    <h3>{this.getTemperature(el.main.temp) > 0 ? '+' : ''}{Math.round(this.getTemperature(el.main.temp))}{this.props.units}°</h3>
                    <img src={this.getIcon(el.weather[0].main)} alt=""/>
                </div>
            </div>)}
        </div>
    }
})
