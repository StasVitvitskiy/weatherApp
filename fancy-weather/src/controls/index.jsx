import React, {PureComponent} from "react";
import "./controls.css"
import spinner from '../images/spinner.svg'
import {connect} from "react-redux";
import {appActions} from "../store";

export const Controls = connect(
    (state) => ({
        lang: state.lang,
        city: state.city,
    }),
    appActions
)(class Controls extends PureComponent{
    render() {
        return <div className="controls">
            <button onClick={this.props.refresh} className='control-refresh'>
                <i className='spinner' dangerouslySetInnerHTML={{ __html: spinner }} />
            </button>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {String(this.props.lang).toUpperCase()}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href={`/${this.props.city}/en`}>EN</a>
                    <a className="dropdown-item" href={`/${this.props.city}/ru`}>RU</a>
                    <a className="dropdown-item" href={`/${this.props.city}/be`}>BE</a>
                </div>
            </div>
            <button className='control-fahrenheit'>°F</button>
            <button className='control-celcius'>°C</button>
        </div>
    }
})