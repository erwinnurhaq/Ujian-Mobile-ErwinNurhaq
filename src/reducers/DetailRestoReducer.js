import { DETAILRESTO } from '../actions/types'

const initialState = {}

export default (state = initialState, action) => {
    switch (action.type) {
        case DETAILRESTO:
            return { ...action.payload }
        default:
            return state
    }
}