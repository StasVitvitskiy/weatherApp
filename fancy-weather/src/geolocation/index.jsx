import React, {PureComponent} from 'react'

export class Geolocation extends PureComponent {
    componentDidMount() {
        geoip2.city(resp => {
            const {city: {names: {en}}} = resp
            window.location = `/${en}/en`
        })
    }
    render() {
        return null
    }
}