import React, {Component, PropTypes} from 'react';
import * as UsersActions from '../actions/UsersActions';
import {connect} from 'react-redux';

class User extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const {dispatch} = this.props;

        this.select = ()=> {
            const {user} = this.props;
            dispatch(UsersActions.selectUser(user.name));
        };

        this.remove = ()=> {
            const {user} = this.props;
            dispatch(UsersActions.deleteUser(user.name));
        };
    }

//
//    shouldComponentUpdate(nextProps) {
//        console.log(this.props, nextProps);
//        return this.props != nextProps;
//    }

    render() {
        console.log('render,this: ');
        console.log(this);
        const {user, selected} = this.props;
        var style = {};
        if (selected) {
            style.color = 'green';
            style.fontWeight = 'bold';
        }
        return (
            <li style={style}>
                {selected}
                <span onClick={this.select}>{user.name}</span> <a onClick={this.remove} href="#">x</a>
            </li>
        );
    }
}

export default connect()(User);
