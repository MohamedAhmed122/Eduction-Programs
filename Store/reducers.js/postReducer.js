import * as types from '../types'

const initalState = {
    posts: [],
    post: {},
    loading: false,
    error: null
}
export const postReducer = (state = initalState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false,
                error: null
            }
        default : 
            return State
    }
}