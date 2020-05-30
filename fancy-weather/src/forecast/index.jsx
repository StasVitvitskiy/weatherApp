import React, {PureComponent} from 'react'
import './forecast.css'
import cloudy from '../images/partlyCloudyDay.png'
import rain from '../images/rain.png'
import {connect} from "react-redux";
import {appActions} from "../store";

export const Forecast = connect(
    (state) => ({
        lang: state.lang,
        forecast: state.forecast.list,
    }),
    appActions
)(class Forecast extends PureComponent {
    get formatter(){
        return new Intl.DateTimeFormat(this.props.lang, {
            weekday: "long",
        });
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
                    <h3>{el.main.temp > 0 ? '+' : ''}{Math.round(el.main.temp)}°</h3>
                    <img srcSet={cloudy} alt=""/>
                </div>
            </div>)}
        </div>
    }
})
