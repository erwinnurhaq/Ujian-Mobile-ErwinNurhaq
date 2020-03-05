import { FILL_LIST_POST } from '../actions/types'

const initialState = {
    loading: true,
    listPost: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FILL_LIST_POST:
            return {
                loading: false,
                listPost: action.payload
            }
        default:
            return state
    }
}