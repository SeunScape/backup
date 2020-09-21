import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';
import './Breadcrum.css';
import axios from 'axios';

// const url = 'https://api.flippay.co/user/user';
class BreadcrumSection extends Component{

  state = {
    person: false
};
componentDidMount(){
    const config = {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    };
   axios.get('user/user', config).then(
        res => {
            this.setState({
                person:res.data
            })
            console.log(res)
        },
        err => {
            console.log(err)
        }
   )
} 
  render(){
    const person = this.state.person;
    return (
      <MDBCard className="mb-5">
          <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
              <MDBBreadcrumb className="float-left" style={{float:"left"}}>
                  <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
                  <MDBBreadcrumbItem active>Dashboard</MDBBreadcrumbItem>
              </MDBBreadcrumb>
              <MDBFormInline className="md-form m-0 " id="bell">
                  {/* <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
                  <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn> */}
                  
                  
                    <div style={{marginTop: "20px"}}>
                                {
                                    person ? 
                                    <div>
                                        <p style={{color:"black", marginRight: '20px'}}>balance : {person.user.balance}</p>
                                    </div>
                                    :<p></p>
                                }
                      </div>
                      <i class="fas fa-bell"></i>
                   {/* <h4><Link className="bitcoinBal">Bitcoin: N4.00</Link></h4> */}
              </MDBFormInline>
          </MDBCardBody>
      </MDBCard>
    )
                }
  }


export default BreadcrumSection;

