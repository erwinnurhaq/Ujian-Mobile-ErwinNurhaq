import AsyncStorage from '@react-native-community/async-storage'
import { LOADING_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, INPUT_TEXT, HIDE_UNHIDE_PASSWORD } from './types'
import Axios from 'axios'
import { API_URL } from '../helpers/apiurl'

export const onInputText = (prop, value) => {
    return {
        type: INPUT_TEXT,
        payload: { prop, value }
    }
}

export const onUserLogin = (username) => {
    return async dispatch => {
        try {
            dispatch({ type: LOADING_LOGIN })
            await AsyncStorage.setItem('tomatotoken', username)
            dispatch({ type: USER_LOGIN_SUCCESS, payload: username })
        } catch (err) {
            dispatch({ type: USER_LOGIN_FAIL, payload: 'error' })
        }
    }
}

export const userLoginCheck = () => {
    return async dispatch => {
        try {
            const token = await AsyncStorage.getItem('tomatotoken')
            if (!token) {
                return dispatch({ type: USER_LOGIN_FAIL })
            }
            dispatch({ type: USER_LOGIN_SUCCESS, payload: token })
        } catch (err) {
            dispatch({ type: USER_LOGIN_FAIL })
        }
    }
}

export const onUserLogout = () => {
    return async dispatch => {
        await AsyncStorage.removeItem('tomatotoken')
        dispatch({ type: USER_LOGIN_FAIL })
    }
}