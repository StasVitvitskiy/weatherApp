import React, {PureComponent} from "react";
import './search.css'

export class Search extends PureComponent {
    onSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return <form onSubmit={this.onSubmit} className="search-form">
            <input placeholder='find a city' type="text"/>
            <button>Search</button>
        </form>
    }
}