import React, {Component, PropTypes} from 'react';
import User from './User';

export default class UsersList extends Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
        fetchUsers: PropTypes.func.isRequired,
        selectUser: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.add = ()=> {
            const {addUser} = this.props;
            addUser({name: new Date().getMilliseconds()});
        }
    }

    componentDidMount() {
        const {fetchUsers, fetchUsersFromBackend} = this.props;
        fetchUsers();
        fetchUsersFromBackend();
    }

    render() {
        const {users, selectUser, selected} = this.props;
        var usersComponents = users.map((user)=> {
            return <User key={user.name} selected={selected === user.name} user={user}/>
        });
        return (
            <div>
                <button onClick={this.add}>add</button>
                <ul>
                    {usersComponents}
                </ul>
            </div>
        );
    }
}
