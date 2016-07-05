import {DELETE_USER, SELECT_USER} from '../constants/ActionTypes';

export default function selected(state = 0, action) {
    switch (action.type) {
        case SELECT_USER:
            return action.payload;
        case DELETE_USER:
            return null;
        default:
            return state;
    }
}
