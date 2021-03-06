import * as types from '../types';

export const fetchposts = ()=> async dispatch => {
    dispatch({
        type: types.GET_POSTS,
        payloaad : ['1st post','2nd posts','3 posts']
    })
} 