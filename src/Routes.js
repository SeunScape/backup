import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import signIn from './components/signin/SignIn';
import signUp from './components/signin/SignUp';
import dashboard from './components/dashboard/dashboard';
import Wallet from './components/dashboard/Wallet';
class Routes extends Component {
    constructor(){
        super();

        this.state = {
            loggedInStatus: "Not Logged In",
            user: {}
        }
    }
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" component={dashboard}/>
                    <Route path="/SignUp" component={signUp}/>
                    <Route path="/SignIn" component={signIn}/>
                    <Route path="/Wallet" component={Wallet} />
                </Switch>
            </Layout>
        )
    }
}
export default Routes;  