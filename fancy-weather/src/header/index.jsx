import React, {PureComponent} from "react";
import './header.css'
import {Search} from "~/search";
import {Controls} from "../controls";

export class Header extends PureComponent {
    render() {
        return <header>
            <Controls/>
            <Search/>
        </header>
    }
}