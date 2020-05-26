import React, {PureComponent} from "react";
import './main.css'
import {DateComponent} from "../date/date";
export class Main extends PureComponent {
    render() {
        return <main className='main-block'>
            <div>
                <h1 className='location'>MOUNT VERNON, UNITED STATES OF AMERICA</h1>
            </div>
            <DateComponent/>
        </main>
    }
}

