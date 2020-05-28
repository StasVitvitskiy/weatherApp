import React from "react";
import './date.css'
import {connect} from "react-redux";

export const DateComponent = connect(
    (state) => ({
        date: state.date,
    }),
)(class DateComponent extends React.Component {

    render() {
        return (
            <div className='date'>
                {this.props.date}
            </div>
        );
    }
})