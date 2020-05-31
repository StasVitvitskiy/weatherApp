import React, {PureComponent} from "react";
import './search.css'
import {appActions} from "../store/reducer";
import {connect} from "react-redux";

export const Search = connect(
    (state) => ({
        query: state.query,
        lang: state.lang,
        i18n:state.i18n,
    })
,appActions)(
    class Search extends PureComponent {
    onSubmit = (e) => {
        e.preventDefault()
        this.navigateToSearch()
    }
    onChange = (event) => {
        this.props.setQuery(event.target.value);
    }
    onKeyPress = (event) => {
        if(event.key === 'Enter' || event.keyCode === 13) {
            this.navigateToSearch()
        }
    }
    navigateToSearch = () => {
        window.location = `/${this.props.query}/${this.props.lang}`
    }

    render() {
        return <form onSubmit={this.onSubmit} className="search-form">
            <input
                placeholder={this.props.i18n.findCity}
                type="text"
                onChange={this.onChange}
                value={this.props.query}
                onKeyPress={this.onKeyPress}
            />
            <button className='search-button'>{this.props.i18n.search}</button>
        </form>
    }
})