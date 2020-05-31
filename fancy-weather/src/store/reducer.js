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
    backgroundImage: '',
    i18n: {
        "findCity": "",
        "search": "",
        "feelsLike": "",
        "wind": "",
        "humidity": ""
    },
    units: 'C',

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
const unsplashApi = {
    key: 'cMhNke50fLaQO0Givz-syfIrmTFv9UCuHfw0Ipc0Uzk',
    secretKey: 'dqpU33a11ciLG7XXJVP9l6nP4pBgktawDdXnI_-GLvo',
    base: 'https://api.unsplash.com/photos/'
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
    SET_BACKGROUND_IMAGE:(backgroundImage) => ({backgroundImage}),
    SET_I18N:(i18n) => ({i18n}),
    SET_UNITS:(units) => ({units})
})
appActions.requestWeather = (query,lang) => (dispatch) => {
    fetch(`${weatherApi.base}weather?q=${query}&lang=${lang}&units=metric&APPID=${weatherApi.key}`)
        .then(response => response.json())
        .then(resp => {
            dispatch(appActions.setWeather(resp))
        })
}
appActions.requestForecast = (city,lang) => (dispatch) => {
    fetch(`${weatherApi.base}/forecast?q=${city}&lang=${lang}&units=Metric&APPID=${weatherApi.key}`)
        .then(response => response.json())
        .then(resp => {
            dispatch(appActions.setForecast(resp))
        })
}
appActions.requestBackgroundImage = () => (dispatch) => {
    fetch(`${unsplashApi.base}/random?orientation=landscape&per_page=1&query=nature&client_id=${unsplashApi.key}`)
        .then(response => response.json())
        .then(resp => {
            dispatch(appActions.setBackgroundImage(resp.urls.full));
        })
}
appActions.refresh = () => (dispatch, getState) => {
    const {city, lang} = getState()
    dispatch(appActions.requestWeather(city,lang))
    dispatch(appActions.requestForecast(city,lang))
}
export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case appActions.setCityAndLang.toString():
        case appActions.setDate.toString():
        case appActions.setWeather.toString():
        case appActions.setQuery.toString():
        case appActions.setGeoCoding.toString():
        case appActions.setForecast.toString():
        case appActions.setBackgroundImage.toString():
        case appActions.setI18n.toString():
        case appActions.setUnits.toString():
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}
