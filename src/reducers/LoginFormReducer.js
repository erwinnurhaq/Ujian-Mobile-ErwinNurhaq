import {
    INPUT_TEXT,
    USER_LOGIN_FAIL,
    LOADING_LOGIN,
    USER_LOGIN_SUCCESS
} from '../actions/types'

const initialState = {
    username: '',
    error: '',
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INPUT_TEXT:
            return { ...state, [action.payload.prop]: action.payload.value }
        case USER_LOGIN_FAIL:
            return { ...state, error: action.payload, loading: false }
        case LOADING_LOGIN:
            return { ...state, loading: true }
        case USER_LOGIN_SUCCESS:
            return initialState
        default:
            return state
    }
}