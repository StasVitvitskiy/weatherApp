import React, {PureComponent} from "react";
import "./controls.css"
export class Controls extends PureComponent{
    render() {
        return <div className="controls">
            <button className='control-refresh'>refresh</button>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    EN
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/minsk/en">EN</a>
                    <a className="dropdown-item" href="/minsk/ru">RU</a>
                    <a className="dropdown-item" href="/minsk/be">BE</a>
                </div>
            </div>
            <button className='control-celcius'>Celcius</button>
            <button className='control-fahrenheit'>Fahrenheit</button>
        </div>
    }
}