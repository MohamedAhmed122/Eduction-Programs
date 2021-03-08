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

const initialState ={
    loading: false,
    error: null,
    profile: null,
    avatar: null, 
    success: false,
    file: null
}

export const getProfileReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case GET_USER_PROFILE_REQUEST:
            return{
                // ...state, 
                loading: true
            }
        case GET_USER_PROFILE_SUCCESS:
            return{
                // ...state, 
                loading: false,
                profile: payload,
             
            }
        case GET_USER_PROFILE_ERROR:
            return{
                // ...state, 
                loading: false,
                error: payload
            }
        default: return state
    }
}


export const getAvatarReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case GET_AVATAR_REQUEST:
            return{
                // ...state, 
                loading: true
            }
        case GET_AVATAR_SUCCESS:
            return{
                // ...state, 
                loading: false,
                avatar: payload,
             
            }
        case GET_AVATAR_ERROR:
            return{
                // ...state, 
                loading: false,
                error: payload
            }
        default: return state
    }
}


export const updateProfileReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case UPDATE_USER_PROFILE_REQUEST:
            return{
                loading: true
            }
        case UPDATE_USER_PROFILE_SUCCESS:
            return{
                loading: false,
                success : true
            }
        case UPDATE_USER_PROFILE_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}

export const uploadAvatarReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case UPLOAD_AVATAR_REQUEST:
            return{
                loading: true
            }
        case UPLOAD_AVATAR_SUCCESS:
            return{
                loading: false,
                file:  payload
            }
        case UPLOAD_AVATAR_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}





