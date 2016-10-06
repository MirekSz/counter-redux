import {FETCH_USERS, FETCH_AVATAR, SELECT_USER, ADD_USER, DELETE_USER} from '../constants/ActionTypes';
import request from 'superagent';
export function fetchUsers() {
    return {
        type: FETCH_USERS,
        payload: [{id: -1, login: 'mirek'}, {id: -2, login: 'maja'}]
    }
}

export function fetchUsersFromBackend() {
    return {
        type: FETCH_USERS,
        payload: get('https://api.github.com/users')
    }
}

function get(link, customizer) {
    return new Promise((resolve, reject)=> {
        request.get(link).end(function (err, res) {
            if (err || !res.ok) {
                reject(err)
            } else {
                if (customizer) {
                    resolve(customizer(res.body));
                } else {
                    resolve(res.body);
                }
            }
        });
    })
}

export function getAvatar(id) {
    return {
        type: FETCH_AVATAR,
        payload: get('https://api.github.com/users/' + id, (body)=>body.avatar_url)
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
        }, 100)
    }
}
