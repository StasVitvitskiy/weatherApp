import React, {PureComponent} from "react";
import './main.css'
import {DateComponent} from "../date/date";
import {Temperature} from '../temperature/index'
import {Forecast} from "../forecast";
import {Map} from "../map";
import {appActions} from "../store/reducer";
import {connect} from "react-redux";

export const Main = connect((state)=> ({
    name: state.weather.name,
    country: state.weather.sys.country,
}), appActions)(class Main extends PureComponent {
    render() {
        return <main className='main-block'>
            <div>
            <div>
                <h1 className='location'>{this.props.name}, {this.props.country}</h1>
            </div>
            <DateComponent/>
            <Temperature/>
            <Forecast/>
            </div>
            <div>
                <Map/>
            </div>
        </main>
    }
})

