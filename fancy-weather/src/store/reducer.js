import {createActions} from "redux-actions";

export const defaultState = {
    city: null,
    lang: null,
    date: null,
}

/*
* {
*   setCityAndLang: (city, lang) => ({city, lang}) // {type: 'SET_CITY_AND_LANG', payload: {city, lang}
* }
* */
export const appActions = createActions({
    SET_CITY_AND_LANG: (city, lang) => ({city, lang}),
    SET_DATE:(date) => ({date})
})

export const rootReducer = (state = defaultState, action) => {
    switch (action.type) {
        case appActions.setCityAndLang.toString():
            return {
                ...state,
                ...action.payload,
            }
        case appActions.setDate.toString():
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}
