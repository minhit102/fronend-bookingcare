import actionTypes from "./appActions"

export const changeLanguageApp = (language)=>({
    type: actionTypes.CHANGE_LANGUAGE,
    language: language
})
