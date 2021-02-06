// import axios from '../config/axios'
import axios from 'axios'
import { Swal, Toast } from '../config/swal'

export function getAllData(payload) {
  return (dispatch) => {
    axios({
      url: `https://randomuser.me/api/?results=28`,
      method: 'GET'
    })
    .then(({ data }) => {
      dispatch({
        type: 'SET_ALL_DATA',
        payload: data.results
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
