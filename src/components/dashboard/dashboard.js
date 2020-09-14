import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';
import './dash.css';
import { Route, Switch} from 'react-router-dom';
import SideNavigation from './sideNavigation';
import DashboardPage from './pages/DashboardPage';
import profilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import MapsPage from './pages/MapsPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './Footer';
import Wallet from './Wallet';
export default class dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect:false
        }
    }

    componentDidMount(){
        if(localStorage.getItem("userData")){
            this.setState({redirect: true})
        }
        else{
            console.log("call user feed");
        }
    }
    render() {
        if(this.state.redirect){
            return <Redirect to= "/SignIn" />
        }
        return (
            <div>
                <div className="flexible-content">
                    {/* <TopNavigation /> */}
                    <SideNavigation />
                    <main id="content" className="p-5">
                        {/* <Routes /> */}
                        <Switch>
                        <Route  exact path='/dashboard' component={DashboardPage} />
                        <Route path="/profile" component={profilePage}/>
                        <Route path="/tables" component={TablesPage}/>
                        <Route path="/maps" component={MapsPage}/>
                        <Route path="/404" component={NotFoundPage}/>
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </div>
        )
    }
}
