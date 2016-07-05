import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UsersList from '../components/UsersList';
import * as UsersActions from '../actions/UsersActions';

class App extends Component {
    render() {
        const {dispatch} = this.props;
        return (
            <UsersList {...this.props}
                {...bindActionCreators(UsersActions, dispatch)} />
        );
    }
}

function select(state) {
    return {
        users: state.users,
        selected: state.selected

    };
}

export default connect(select)(App);
