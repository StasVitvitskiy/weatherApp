import './app.css'
import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {appActions} from "./store/reducer";
import {Header} from "./header";
import {Main} from "./main";

export const App = connect(() => ({}), appActions)(
    withRouter(
        class App extends PureComponent {
            componentDidMount() {
                const {match: {params: {city, lang}}} = this.props
                this.props.setCityAndLang(city, lang)
            }

            render() {
                return <div className="main">
                    <Header />
                    <Main />
                </div>
            }
        }
    )
)