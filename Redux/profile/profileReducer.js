import {
    GET_USER_PROFILE_ERROR, 
    GET_USER_PROFILE_REQUEST, 
    GET_USER_PROFILE_SUCCESS,
    GET_USER_AVATAR_REQUEST,
    GET_USER_AVATAR_SUCCESS,
    GET_USER_AVATAR_ERROR
  } from './profileTypes'

const initialState ={
    loading: false,
    error: null,
    profile: null,
    avatar: null
}

export const getProfileReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case GET_USER_PROFILE_REQUEST:
            return{
                loading: true
            }
        case GET_USER_PROFILE_SUCCESS:
            return{
                loading: false,
                profile: payload,
            }
        case GET_USER_PROFILE_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}

export const getAvatarReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case GET_USER_AVATAR_REQUEST:
            return{
                loading: true
            }
        case GET_USER_AVATAR_SUCCESS:
            return{
                loading: false,
                avatar: payload,
            }
        case GET_USER_AVATAR_ERROR:
            return{
                loading: false,
                error: payload
            }
        default: return state
    }
}