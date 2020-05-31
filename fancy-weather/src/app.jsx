import './app.css'
import React, {PureComponent} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {appActions} from "./store";
import {Header} from "./header";
import {Main} from "./main";
import en from './i18n/en.json'
import ru from './i18n/ru.json'
import be from './i18n/be.json'

const i18n = {
    en,
    ru,
    be,
}

export const App = connect((state) => ({
    backgroundImage:state.backgroundImage
}), appActions)(
    withRouter(
        class App extends PureComponent {
            componentDidMount() {
                let {match: {params: {city, lang}}} = this.props
                city = city.replace(/-/g, " ");
                this.props.setCityAndLang(city, lang)
                this.props.requestWeather(city,lang);
                this.props.requestForecast(city,lang);
                this.props.requestBackgroundImage();
                this.props.setI18n(i18n[lang]);
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
                    background: `url(${this.props.backgroundImage})`
                }} className="main">
                    <Header />
                    <Main />
                </div>
            }
        }
    )
)