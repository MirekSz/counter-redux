import {FETCH_USERS, SELECT_USER, ADD_USER, DELETE_USER} from '../constants/ActionTypes';
import request from 'superagent';
export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [{name: 'mirek'}, {name: 'maja'}]
    }
}

export function fetchUsersFromBackend() {
    return {
        type: FETCH_USERS,
        payload: get('http://rest.learncode.academy/api/wstern/users')
    }
}

function get(link) {
    return new Promise((resolve, reject)=> {
        request.get('http://rest.learncode.academy/api/wstern/users').end(function (err, res) {
            if (err || !res.ok) {
                reject(err)
            } else {
                resolve(res.body);
            }
        });
    })
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
        }, 100)
    }
}
