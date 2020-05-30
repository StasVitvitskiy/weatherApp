import {createActions} from "redux-actions";

export const defaultState = {
    city: null,
    lang: null,
    date: null,
    weather: {
        name:'',
        sys:{country:''},
        main: {
            temp:0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0
        },
        weather: [
              {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
              }
        ],
        wind: {
            speed: 7.7,
            deg: 90
        },
        coord: {
            lon: -0.13,
            lat: 51.51
        },
    },
    query:'',
    geolocation: {},
    geocoding: {
        results: [
            {
                bounds: {
                    northeast: {
                        lat: 53.9717897,
                        lng: 28.0608997
                    },
                    southwest: {
                        lat: 53.793847,
                        lng: 27.3740176
                    }
                },
            }
        ]
    },
}
const weatherApi  = {
    key: '52d94542ad3e450386bb0fce08b6e9ee',
    base: 'https://api.openweathermap.org/data/2.5/'
};
export const geoLocationApi = {
    key: '60bae32abe5d50',
    base: 'https://ipinfo.io/json',
    googleApiKey: 'AIzaSyCjPHRv70EKLCeiZ5R7fbR5qwf-cDrveTw'
}
const geoCodingApi = {
    key:'72e74402141c470aaa4562243dffec7a',
    base: 'https://api.opencagedata.com/geocode/v1/json'
}
/*
* {
*   setCityAndLang: (city, lang) => ({city, lang}) // {type: 'SET_CITY_AND_LANG', payload: {city, lang}
* }
* */
export const appActions = createActions({
    SET_CITY_AND_LANG: (city, lang) => ({city, lang}),
    SET_DATE:(date) => ({date}),
    SET_WEATHER:(weather) => ({weather}),
    SET_QUERY:(query) => ({query}),
    SET_GEO_LOCATION:(geolocation) => ({geolocation}),
    SET_GEO_CODING:(geocoding) => ({geocoding})
})
appActions.requestWeather = (query) => (dispatch) => {
    fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
        .then(response => response.json())
        .then(resp => {
            dispatch(appActions.setWeather(resp))
            return fetch(`${geoCodingApi.base}?q=${query}&key=${geoCodingApi.key}&pretty=1&no_annotations=1`);
        })
        .then(result => result.json())
        .then(response => {
            dispatch(appActions.setGeoCoding(response))
        });
}

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case appActions.setCityAndLang.toString():
        case appActions.setDate.toString():
        case appActions.setWeather.toString():
        case appActions.setQuery.toString():
        case appActions.setGeoLocation.toString():
        case appActions.setGeoCoding.toString():
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}
