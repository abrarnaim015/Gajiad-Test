// import axios from '../config/axios'
import axios from 'axios'
import { Swal, Toast } from '../config/swal'

export function getAllData(payload) {
  return (dispatch) => {
    axios({
      url: ``,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({
        type: 'SET_ALL_DATA',
        payload: data
      })
    })
    .catch(console.log)
    .finally(() => {
      dispatch({
        type: 'SET_LOADING_DATA',
        payload: false
      })
    })
  }
}
