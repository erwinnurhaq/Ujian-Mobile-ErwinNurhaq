import AsyncStorage from '@react-native-community/async-storage'
import Axios from 'axios'
import { API_URL } from '../helpers/apiurl'
import { FILL_LIST_POST } from './types'


export const getHomeListPost = () => {
    return async dispatch => {
        try {
            const token = await AsyncStorage.getItem('tomatotoken')
            console.log(token)
            const res = await Axios.get(`${API_URL}/api/v2.1/search?start=1&count=10&sort=rating`, {
                headers: { 'user-key': '74b25737566cc5cfe2644bcdf3265f8e' }
            })
            dispatch({ type: FILL_LIST_POST, payload: res.data.restaurants })
        } catch (err) {
            console.log(err)
        }
    }
}