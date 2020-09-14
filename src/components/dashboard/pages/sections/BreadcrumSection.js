import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
import {Link} from 'react-router-dom';
import './Breadcrum.css';
const BreadcrumSection = () => {
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
                <h4>balance : N5.00</h4>
                {/* <h4><Link className="bitcoinBal">Bitcoin: N4.00</Link></h4> */}
            </MDBFormInline>
        </MDBCardBody>
    </MDBCard>
  )
}

export default BreadcrumSection;

