import {FETCH_USERS, SELECT_USER, ADD_USER, DELETE_USER} from '../constants/ActionTypes';

export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [{name: 'mirek'}, {name: 'maja'}]
    }
}

export function selectUser(id) {
    return function (dispatch) {
        dispatch({
            type: SELECT_USER,
            payload: id
        })
    }
}

export function deleteUser(id) {
    return function (dispatch) {
        dispatch({
            type: DELETE_USER,
            payload: id
        })
    }
}
export function addUser(user) {
    return function (dispatch) {
        setTimeout(()=> {
            dispatch({
                type: ADD_USER,
                payload: user
            })
        }, 1000)
    }
}
