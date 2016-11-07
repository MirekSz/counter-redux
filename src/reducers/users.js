import * as T from '../constants/ActionTypes';
import _ from 'lodash';

export default function users(state = 0, action) {
    switch (action.type) {
        case T.FETCH_USERS :
            return action.payload;
        case   T.FETCH_USERS_FULFILLED:
            return state.concat(action.payload.map((element)=>{element.name=element.login;return element;}));
        case T.ADD_USER:
            return [...state, action.payload];
        case T.DELETE_USER:
            var newState = [...state];
            _.remove(newState, el=>el.id === action.payload);
            return newState;
        default:
            return state;
    }
}
