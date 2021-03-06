import {applyMiddleware, createStore, compose, combineReducers} from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import Root from './containers/Root'
import {Provider, connect} from 'react-redux'

const context = require.context('./', true, /Printer$/)
// console.log(context());
context.keys().forEach(function (a) {
    var module = require(a);
    console.log(module)
});

const initialState = {
    fetching: false,
    fetched: false,
    users: [],
    error: null,
};


var selected = (state = {selected: null}, action)=> {
    switch (action.type) {
        case "SELECT": {
            return {
                ...state,
                selected: action.payload,
            };
            break;
        }
    }
    return state
}

var users = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_PENDING": {
            return {...state, fetching: true};
            break;
        }
        case "FETCH_USERS_REJECTED": {
            return {...state, fetching: false, error: action.payload};
            break;
        }
        case "FETCH_USERS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload,
            };
            break;
        }
    }
    return selected(state, action)
};

const reducer = combineReducers({
    users, selected
})

const middleware = compose(applyMiddleware(promise(), thunk, logger()), window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(reducer, middleware);

store.subscribe(()=> {
    console.log('a', store.getState());
})

store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("https://api.github.com/users")
});
store.dispatch({
    type: "SELECT",
    payload: '5771819c9ee8c10100eb8c5c'
});
