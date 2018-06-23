import React,{Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions';

class Users extends Component{

    componentWillMount(){
        this.props.fetchUsers();
    }

    render(){
        return(
            <div>
                Users
                {console.log(this.props)}
            </div>
        );
    }
}

export default connect((state => state),actions)(Users);