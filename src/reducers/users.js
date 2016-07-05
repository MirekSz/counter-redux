import {FETCH_USERS, ADD_USER, DELETE_USER} from '../constants/ActionTypes';
import _ from 'lodash';
export default function users(state = 0, action) {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload;
        case ADD_USER:
            return [...state, action.payload];
        case DELETE_USER:
            var newState = [...state];
            _.remove(newState, el=>el.name === action.payload);
            return newState;
        default:
            return state;
    }
}
