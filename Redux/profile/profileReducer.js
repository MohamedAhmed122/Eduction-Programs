import {GET_USER_PROFILE_ERROR, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS} from './profileTypes'

const initialState ={
    loading: false,
    error: null,
    profile: null
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
