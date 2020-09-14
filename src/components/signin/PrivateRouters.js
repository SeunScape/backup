import React from 'react'
import { Redirect } from 'react-router-dom'
import {responseJSON} from './SignIn';
class PrivateRouters extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = localStorage.setItem('token', responseJSON);
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/SignIn' }} />
        );
    }
}

export default PrivateRouters;