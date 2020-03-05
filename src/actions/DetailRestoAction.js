import { DETAILRESTO } from '../actions/types'

export const initDetailRestaurant = (post) => {
    return {
        type: DETAILRESTO,
        payload: post
    }
}