import axios from 'axios';
import {GET_USER_PROFILE_ERROR, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS} from './profileTypes'


export const getProfile = () => async (dispatch, getState) =>{
    try {

        dispatch({type: GET_USER_PROFILE_REQUEST})
        
        const {auth :{ currentUser }} = getState()
        const config = {
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${currentUser.token}`,
          },
        }

        const { data } = await axios.get('http://localhost:5000/Profiles', config)
        console.log(data)
        dispatch({type: GET_USER_PROFILE_SUCCESS, payload: data})

    } catch (error) {
        const message =
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
       
        dispatch({
          type: GET_USER_PROFILE_ERROR,
          payload: message,
        })
    }
}