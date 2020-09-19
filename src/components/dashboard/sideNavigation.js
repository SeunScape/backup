import React, { Component } from 'react';
import logo from "../../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import "./sideNav.css";
import "./dash.css";
import {Getdata} from './Getdata' 
import axios from 'axios';

// const url = 'https://api.flippay.co/user/user';
class TopNavigation extends Component{
    state = {
        user: []
    };
    componentDidMount(){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
       axios.get('user', config).then(
            res => {
                this.setState({
                    user:res.data
                })
            },
            err => {
                console.log(err)
            }
       )
    } 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       error: undefined,
    //       isLoaded: false,
    //       items: [],
    //     };
    
    //    this.getData = this.getData.bind(this);
    //   }
    //   componentDidMount() {
    //     this.getData();
    //   }
    //   getData(){
    //     let auth =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRlODI0YjAyY2VlMmVlOGE0NzMyODgiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3QxMjMiLCJ2ZXJpZmllZCI6ZmFsc2UsImJhbGFuY2UiOjAsInBlbmRpbmciOjAsImlhdCI6MTYwMDQ0MDM2MiwiZXhwIjoxNjAwNDU0NzYyfQ.Er2Q3VctxySF1bO1Sb8WnVYDQNQyd10bB0s_OqwqkJQ';
    //           return fetch(url, {
    //            method: 'GET',
    //            headers:{
    //              Accept: 'application/json',
    //                       'Content-Type': 'application/json',
    //                       'Authorization': "Bearer " + auth,
    //               },
    //          })
    //              .then(res => res.json())
    //              .then(
    //                 (result) => {
            
    //                   this.setState({
    //                     isLoaded: true,
    //                     items: result,
    //                   })
    //                 //   console.log({items})
    //                 },
    //                 (error) => {
    //                   this.setState({
    //                     isLoaded: true,
    //                     error
    //                   });
    //                 }
    //               )
    //         }
    render(){
        // const { error, isLoaded, items } = this.state;
        // if (error) {
        //   return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //   return <div></div>;
        // } else {
        return (
            <div className="sidebar-fixed position-fixed" id="background-logo" color="primary-color-dark">
                <div>
                    <a href="#!" className="logo-wrapper waves-effect">
                        <img alt="MDB React Logo" className="img-fluid" src='/images/IMG-20200317-WA0134-removebg.png'/>
                    </a>
                </div>

                <div className="user-circle">
                    <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    alt=""
                    className="rounded-circle img-fluid userImg"
                    />
                    <p style={{color: "white"}}>Test User</p>
                    <p style={{color: "white", marginTop: "-10px"}}></p>
                    <div>
                        {this.state.err || !this.state.user ? (
                            <div>Error message</div>
                        ):(
                            <div>
                                <div>{this.state.user.user}</div>
                            </div>
                        )}
                    </div>
                    <div>
                    </div>
                </div>

                <div className="sideStyle">
                    <MDBListGroup className="list-group-flush">
                        <NavLink exact={true} to="/" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="chart-pie" className="mr-3"/>
                                Dashboard
                            </MDBListGroupItem>
                        </NavLink>
                        <NavLink to="/Wallet" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="user" className="mr-3"/>
                                Wallet
                            </MDBListGroupItem>
                        </NavLink>
                        <NavLink to="/tables" activeClassName="activeClass listen">
                            <MDBListGroupItem>
                                <MDBIcon icon="table" className="mr-3"/>
                                Lorem
                            </MDBListGroupItem>
                        </NavLink>
                        <NavLink to="/maps" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="map" className="mr-3"/>
                                Lorem
                            </MDBListGroupItem>
                        </NavLink>
                        <NavLink to="/404" activeClassName="activeClass">
                            <MDBListGroupItem>
                                <MDBIcon icon="exclamation" className="mr-3"/>
                                404
                            </MDBListGroupItem>
                        </NavLink>
                    </MDBListGroup>
                </div>
            </div>
        );
    }
}

export default TopNavigation;