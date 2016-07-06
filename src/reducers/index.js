import {combineReducers} from 'redux';
import users from './users';
import selected from './selected';

const rootReducer = combineReducers({
    nested: combineReducers({
        users,
        selected
    }),
    users,
    selected
});

export default rootReducer;
