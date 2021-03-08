import axios from 'axios';
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
  UPLOAD_AVATAR_REQUEST, 
  UPLOAD_AVATAR_SUCCESS, 
  UPLOAD_AVATAR_ERROR
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

      const { data } = await axios.get('http://localhost:5000/Profiles/get-avatar', config)
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
      axios.post('http://localhost:5000/Profiles/update', (value), config )

    
      dispatch({type: UPDATE_USER_PROFILE_SUCCESS, payload: data})
      
  } catch (error) {
      dispatch({
          type: UPDATE_USER_PROFILE_ERROR,
          payload: error.response &&
           error.response.data.message ? error.response.data.message : error.message
      })
  }
}




export const updateAvatar = (file) => async(dispatch, getState) =>{
    
  try {
      dispatch({ type: UPLOAD_AVATAR_REQUEST});
  
     
      const {auth :{ currentUser }} = getState()


      const config = {
        headers: {
          'Content-Type': "multipart/form-data",
          Authorization: `Bearer ${currentUser.token}`,
        },
      }
    
      const { data } = await 
      axios.post('http://localhost:5000/Profiles/upload-avatar', {file}, config )

    
      dispatch({type: UPLOAD_AVATAR_SUCCESS, payload: data})
      
  } catch (error) {
      dispatch({
          type: UPLOAD_AVATAR_ERROR,
          payload: error.response &&
           error.response.data.message ? error.response.data.message : error.message
      })
  }
}

