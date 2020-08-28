import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './components/Home/Home';
import SignIn from './SignIn';
class Routes extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/SignIn" component={SignIn}/>
                </Switch>
            </Layout>
        )
    }
}
export default Routes;  