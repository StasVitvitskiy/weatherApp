import React, {PureComponent} from "react";
import './main.css'
import {DateComponent} from "../date/date";
import {Temperature} from '../temperature/index'
import {Forecast} from "../forecast";
import {Map} from "../map";
export class Main extends PureComponent {
    render() {
        return <main className='main-block'>
            <div>
            <div>
                <h1 className='location'>MOUNT VERNON, UNITED STATES OF AMERICA</h1>
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
}

