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
                id: 0,
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
            lon: 0,
            lat: 0
        },
    },
    query:'',
    geocoding: {
        location: {
            accuracy_radius: 0,
            latitude: 0,
            longitude: 0,
            metro_code: 0,
            time_zone: ""}
    },
    forecast: {
        list:[],
    },

}
const weatherApi  = {
    key: '52d94542ad3e450386bb0fce08b6e9ee',
    base: 'https://api.openweathermap.org/data/2.5/'
};
const geoCodingApi = {
    key:'72e74402141c470aaa4562243dffec7a',
    base: 'https://api.opencagedata.com/geocode/v1/json'
}
export const mapBoxApi = {
    key: 'pk.eyJ1Ijoic3Rhc3ZpdHZpdHNraXkiLCJhIjoiY2thdThlZGlpMTRudDJza3lnbGd4eXJiYiJ9.5i5W4LcUPvY-vmWIvWVYjw',
    base: ''
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
    SET_GEO_CODING:(geocoding) => ({geocoding}),
    SET_FORECAST:(forecast) => ({forecast}),
})
appActions.requestWeather = (query) => (dispatch) => {
    fetch(`${weatherApi.base}weather?q=${query}&units=metric&APPID=${weatherApi.key}`)
        .then(response => response.json())
        .then(resp => {
            dispatch(appActions.setWeather(resp))
            geoip2.city(resp => {
                dispatch(appActions.setGeoCoding(resp))
            })
        })
}
appActions.requestForecast = (city,lang) => (dispatch) => {
    fetch(`${weatherApi.base}/forecast?q=${city}&lang=${lang}&units=Metric&APPID=${weatherApi.key}`)
        .then(response => response.json())
        .then(resp => {
            dispatch(appActions.setForecast(resp))
        })
}
export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case appActions.setCityAndLang.toString():
        case appActions.setDate.toString():
        case appActions.setWeather.toString():
        case appActions.setQuery.toString():
        case appActions.setGeoCoding.toString():
        case appActions.setForecast.toString():
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}
