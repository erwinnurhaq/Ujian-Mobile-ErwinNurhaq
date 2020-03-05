import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../actions/types'

const initialState = {
    username: '',
    authChecked: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS:
            return { username: action.payload, authChecked: true }
        case USER_LOGIN_FAIL:
            return { authChecked: true }
        default:
            return state
    }
}