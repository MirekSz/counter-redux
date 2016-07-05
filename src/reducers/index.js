import {combineReducers} from 'redux';
import users from './users';
import selected from './selected';

const rootReducer = combineReducers({
    users,
    selected
});

export default rootReducer;
