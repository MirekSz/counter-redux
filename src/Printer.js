import { Provider,connect  } from 'react-redux'
import React from "react";
class Printer extends React.Component {
    render() {
        if(!this.props.data){
            return null;
        }
        var json = JSON.stringify(this.props);
        var lis = this.props.data.map((user)=><li>{user.id} {user.name} {user.age}</li>)
        return (<div>
                <ul>s{lis}</ul>
                {json}
            </div>
        );
    }
}

export default connect((state)=>{
    return {data:state.users.users.data,selected:state.users.state}
})(Printer);