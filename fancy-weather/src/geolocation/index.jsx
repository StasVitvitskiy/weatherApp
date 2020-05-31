import React, {PureComponent} from 'react'

export class Geolocation extends PureComponent {
    componentDidMount() {
        window.callback = function callback(data)
        {
            const {city} = data
            window.location = `/${city}/en`
        }

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://geolocation-db.com/jsonp';
        var h = document.getElementsByTagName('script')[0];
        h.parentNode.insertBefore(script, h);
    }
    render() {
        return null
    }
}