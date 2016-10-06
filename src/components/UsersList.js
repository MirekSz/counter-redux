import React, {Component, PropTypes} from 'react';
import User from './User';
import UserPhoto from './UserPhoto';
import {bindActionCreators} from 'redux';
import * as UsersActions from '../actions/UsersActions';

export default class UsersList extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        fetchUsers: PropTypes.func.isRequired,
        addUser: PropTypes.func.isRequired,
    };

    constructor() {
        super();
        this.add = ()=> {
            const {addUser} = this.props;
            var milliseconds = new Date().getMilliseconds();
            addUser({id: milliseconds, login: milliseconds});
        }
    }

    componentDidMount() {
        const {fetchUsers, fetchUsersFromBackend} = this.props;
        fetchUsers();
        fetchUsersFromBackend();
    }

    render() {
        const {users, selected, dispatch} = this.props;
        var usersComponents = users.map((user)=> {
            return <User key={user.name} selected={selected.id === user.id} user={user}/>
        });
        var photo;
        if (selected.id) {
            photo = <UserPhoto selected={selected} {...bindActionCreators(UsersActions, dispatch)}/>;
        }
        return (
            <div>
                <div className="col-xs-6">
                    <button className="btn btn-primary" onClick={this.add}>add</button>
                    <ul>
                        {usersComponents}
                    </ul>
                </div>
                <div className="col-xs-6">
                    {photo}
                </div>
            </div>
        );
    }
}
