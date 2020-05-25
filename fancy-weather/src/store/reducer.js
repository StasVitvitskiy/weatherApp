import {createActions} from "redux-actions";

export const defaultState = {
    city: null,
    lang: null,
}

export const appActions = createActions({
    SET_CITY_AND_LANG: (city, lang) => ({city, lang})
})

export const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case appActions.setCityAndLang.toString():
            return {
                ...state,
                ...action.payload,
            }
    }
    return state
}
