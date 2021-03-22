import axios from 'axios';
import { baseURL } from '../config';
import {
  GET_USER_PROFILE_ERROR, 
  GET_USER_PROFILE_REQUEST, 
  GET_USER_PROFILE_SUCCESS,
  GET_AVATAR_REQUEST, 
  GET_AVATAR_SUCCESS,
  GET_AVATAR_ERROR,
  UPDATE_USER_PROFILE_REQUEST,
  UPDATE_USER_PROFILE_SUCCESS,
  UPDATE_USER_PROFILE_ERROR,

} from './profileTypes'


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

        const { data } = await axios.get(`${baseURL}Profiles`, config)
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

export const getAvatar = () => async (dispatch, getState) =>{
  try {

      dispatch({type: GET_AVATAR_REQUEST})
      
      const {auth :{ currentUser }} = getState()


      const config = {
        headers: {
          'Accept': "*/*",
          Authorization: `Bearer ${currentUser.token}`,
        },
      }

      const { data } = await axios.get(`${baseURL}Profiles/get-avatar/${currentUser.id}`, config)
      console.log(data)
      dispatch({type: GET_AVATAR_SUCCESS, payload: data})

  } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: GET_AVATAR_ERROR,
        payload: message,
      })
  }
}



export const updateProfile = (value) => async(dispatch, getState) =>{
    
  try {
      dispatch({ type: UPDATE_USER_PROFILE_REQUEST});
  
     
      const {auth :{ currentUser }} = getState()


      const config = {
        headers: {
          'Content-Type': "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
      }
    
      const { data } = await 
      axios.post(`${baseURL}Profiles/update`, (value), config )

    
      dispatch({type: UPDATE_USER_PROFILE_SUCCESS, payload: data})
      
  } catch (error) {
      dispatch({
          type: UPDATE_USER_PROFILE_ERROR,
          payload: error.response &&
           error.response.data.message ? error.response.data.message : error.message
      })
  }
}



