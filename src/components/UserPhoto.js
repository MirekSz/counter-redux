import React, {Component, PropTypes} from 'react';
import * as UsersActions from '../actions/UsersActions';
import {connect} from 'react-redux';

class UserPhoto extends Component {
    static propTypes = {
        selected: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
    }

    componentWillMount(nextProps) {

    }

//
//    shouldComponentUpdate(nextProps) {
//        console.log(this.props, nextProps);
//        return this.props != nextProps;
//    }

    render() {
        var {selected, getAvatar} = this.props;
        if (!selected.avatar) {
            getAvatar(selected.id);
            return null;
        }

        var {selected} = this.props;
        return <div><img style={{height: '120px', width: '120px'}} src={selected.avatar}/></div>
    };
}

export default UserPhoto;
