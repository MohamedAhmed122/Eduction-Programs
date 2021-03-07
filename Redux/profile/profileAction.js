import axios from 'axios';

import {
  GET_USER_PROFILE_ERROR, 
  GET_USER_PROFILE_REQUEST, 
  GET_USER_PROFILE_SUCCESS,
  GET_USER_AVATAR_REQUEST,
  GET_USER_AVATAR_SUCCESS,
  GET_USER_AVATAR_ERROR
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

        const { data } = await axios.get('/Profiles', config)
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

      dispatch({type: GET_USER_AVATAR_REQUEST})
      
      const {auth : { currentUser }} = getState()
      const config = {
        headers: {
        // "Content-Type": "image/jpeg, image/png, image/png",
        // "Content-Type": "application/octet-stream",
        // "Content-Type" : "multipart/form-data",
          'Content-Type': "application/json",
          Authorization: `Bearer ${currentUser.token}`,
        },
      }

      const { data } = await axios.get('/Profiles/get-avatar', config)
      console.log(data)
      dispatch({type: GET_USER_AVATAR_SUCCESS, payload: data})

  } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
     
      dispatch({
        type: GET_USER_AVATAR_ERROR,
        payload: message,
      })
  }
}
