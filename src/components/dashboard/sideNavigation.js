import React from 'react';
import logo from "../../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import "./sideNav.css";
import "./dash.css";
const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed" id="background-logo" color="primary-color-dark">
            <div>
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="img-fluid" src='/images/IMG-20200317-WA0134-removebg.png'/>
                </a>
            </div>
            <h2 style={{color:"white"}}>'User Details'</h2>
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

export default TopNavigation;