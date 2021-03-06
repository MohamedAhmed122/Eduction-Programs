import { 
    USER_LOGIN_ERROR, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_REGISTER_ERROR, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_LOGOUT 
} from "./AuthTypes";

const initialState ={
    currentUser: null,
    isAuthenticated: false,
    loading: false,
    error: null
};

const AuthReducer = (state = initialState, { type, payload } ) =>{
    switch(type){
        case USER_LOGIN_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                currentUser: payload,
            }
        case USER_LOGIN_ERROR:
            return{
                ...state,
                error: payload,
            }
        case USER_LOGOUT:
            return{
                isAuthenticated: false,
                currentUser: null,
                loading: false
            }
            case USER_REGISTER_REQUEST:
            return{
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return{
                ...state,
                loading: false,
                isAuthenticated: true,
                currentUser: payload,
            }
        case USER_REGISTER_ERROR:
            return{
                ...state,
                error: payload,
            }
        
        default: return state;
    }
}



export default AuthReducer;
