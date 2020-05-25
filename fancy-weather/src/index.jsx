import './index.css'
import {render} from "react-dom"
import {App} from "./app";
import React from "react"
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";
import {store} from "./store";

render(<Router>
    <Provider store={store}>
        <Switch>
            <Route path="/:city/:lang">
                <App />
            </Route>
            <Route>
                <Redirect to="/minsk/en" />
            </Route>
        </Switch>
    </Provider>
</Router>, document.getElementById('root'))

