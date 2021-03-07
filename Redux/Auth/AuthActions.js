import axios from 'axios'
import { 
    USER_LOGIN_ERROR, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS,
    USER_REGISTER_ERROR, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS,
    USER_LOGOUT, 
} from "./AuthTypes";


export const userLogin = (email, password) => async(dispatch) =>{
    
    try {
        dispatch({ type: USER_LOGIN_REQUEST});
    
        const config ={
            header:{
                'content-types': 'application/json'
            }
        }
        const { data } = await axios.post('/Accounts/login',
            {email, password}, config
        )

        dispatch({type: USER_LOGIN_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const userLogout = () =>(dispatch) =>{

    dispatch({type: USER_LOGOUT})
}


export const userRegister = (value) => async(dispatch) =>{
    
    try {
        dispatch({ type: USER_REGISTER_REQUEST});
    
        const config ={
            header:{
                'content-types': 'application/json'
            }
        }
        console.log(value)
      
        const { data } = await 
        axios.post('/Accounts/register', (value), config )

        dispatch({type: USER_LOGIN_SUCCESS, payload: data})
        dispatch({type: USER_REGISTER_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({
            type: USER_REGISTER_ERROR,
            payload: error.response &&
             error.response.data.message ? error.response.data.message : error.message
        })
    }
}

