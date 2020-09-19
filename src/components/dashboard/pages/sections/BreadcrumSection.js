import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';
import './Breadcrum.css';

const url = 'https://api.flippay.co/user/user';
class BreadcrumSection extends Component{

    constructor(props) {
        super(props);
        this.state = {
          error: undefined,
          isLoaded: false,
          items: [],
        };
    
       this.getData = this.getData.bind(this);
      }
      componentDidMount() {
        this.getData();
      }
      getData(){
        let auth =  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjRlODI0YjAyY2VlMmVlOGE0NzMyODgiLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VybmFtZSI6InRlc3QxMjMiLCJ2ZXJpZmllZCI6ZmFsc2UsImJhbGFuY2UiOjAsInBlbmRpbmciOjAsImlhdCI6MTYwMDQ0MDM2MiwiZXhwIjoxNjAwNDU0NzYyfQ.Er2Q3VctxySF1bO1Sb8WnVYDQNQyd10bB0s_OqwqkJQ';
              return fetch(url, {
               method: 'GET',
               headers:{
                 Accept: 'application/json',
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer " + auth,
                  },
             })
                 .then(res => res.json())
                 .then(
                    (result) => {
            
                      this.setState({
                        isLoaded: true,
                        items: result,
                      })
                    //   console.log({items})
                    },
                    (error) => {
                      this.setState({
                        isLoaded: true,
                        error
                      });
                    }
                  )
            }
  render(){
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div></div>;
    } else {
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
                  <i class="fas fa-bell"></i>
                  <h4>balance : {items.user.balance}</h4>
                  {/* <h4><Link className="bitcoinBal">Bitcoin: N4.00</Link></h4> */}
              </MDBFormInline>
          </MDBCardBody>
      </MDBCard>
    )
                }
  }
}

export default BreadcrumSection;

