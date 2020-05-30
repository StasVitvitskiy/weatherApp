import './index.css'
import {render} from "react-dom"
import {App} from "./app";
import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./store";
import {Geolocation} from "./geolocation";

render(<Router>
    <Provider store={store}>
        <Switch>
            <Route path="/:city/:lang">
                <App />
            </Route>
            <Route>
                <Geolocation />
            </Route>
        </Switch>
    </Provider>
</Router>, document.getElementById('root'))

