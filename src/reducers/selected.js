import {DELETE_USER, SELECT_USER, FETCH_AVATAR_FULFILLED} from '../constants/ActionTypes';

export default function selected(state = {}, action) {
    let newState = {...state};
    switch (action.type) {
        case SELECT_USER:
            newState = {};
            newState.id = action.payload;
            return newState;
        case FETCH_AVATAR_FULFILLED:
            newState.avatar = action.payload;
            return newState;
        case DELETE_USER:
            return null;
        default:
            return state;
    }
}



