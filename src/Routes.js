import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import signIn from './components/signin/SignIn';
import signUp from './components/signin/SignUp';
import Dashboard from './components/dashboard/pages/DashboardPage';
import Wallet from './components/dashboard/Wallet';
import {PrivateRoute} from './components/dashboard/PrivateRoute';
import DashboardPage from './components/dashboard/pages/DashboardPage';

class Routes extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/SignUp" component={signUp}/>
                    <Route path="/SignIn" component={signIn}/>
                    <PrivateRoute path="/Wallet" component={Wallet} exact/>
                    <PrivateRoute path="/dashboard" component={DashboardPage}/>
                    <Route path="/" component={Home} exact/>
                </Switch>
        )
    }
}
export default Routes;  