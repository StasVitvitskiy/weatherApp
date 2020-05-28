import './app.css'
import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {appActions} from "./store/reducer";
import {Header} from "./header";
import {Main} from "./main";
import defaultBG from '~/images/defaultBackground.jpeg'

export const App = connect(() => ({}), appActions)(
    withRouter(
        class App extends PureComponent {
            componentDidMount() {
                let {match: {params: {city, lang}}} = this.props
                this.props.setCityAndLang(city, lang)
                if(lang === 'be') {
                    lang = 'ru';
                }
                const formatter = new Intl.DateTimeFormat(lang, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric"
                });
                setInterval(() => {
                    const today = new Date();
                    this.props.setDate(
                        formatter.format(today)
                    )
                },1000)
            }

            render() {
                return <div style={{
                    background: `url(${defaultBG})`
                }} className="main">
                    <Header />
                    <Main />
                </div>
            }
        }
    )
)