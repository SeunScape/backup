import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol,MDBBtn } from 'mdbreact';
import "./Breadcrum.css";
import { Link } from 'react-router-dom';
const AdminCardSection2 = () => {
  return (
    <MDBRow className="mb-4" style={{margin:" -10px"}}>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="primary-color-dark" className="classic-admin-card cardColor shadow-box-example hoverable">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon far icon="money-bill-alt"/>
              </div>
              <h3><strong>wallet</strong></h3>
              <br/>
              <p>Trade on Bitcoin and Ethereum</p>
              <br/><br/>
              <Link to="/wallet" id="btc-link">TRADE NOW</Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="warning-color-dark" className="classic-admin-card shadow-box-example hoverable">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon far icon="money-bill-alt"/>
              </div>
              <h3><strong>Gift Cards</strong></h3><br/>
              <p>Lorem nostrud exercitation do pariatur dolor nulla.</p>
              <br/><br/>
              
              <Link to="#" id="btc-link">TRADE NOW</Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-3 mx-auto">
          <MDBCard color="primary-color-dark" className="classic-admin-card shadow-box-example hoverable">
            <MDBCardBody>
<div className="float-right">
              <MDBIcon far icon="money-bill-alt"/>
              </div>
              <h3><strong>Transaction History</strong></h3><br/>
              <p>Lorem nostrud exercitation do pariatur dolor nulla.</p>
              <br/><br/>
              <Link to="#" id="btc-link">TRADE NOW </Link>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* <MDBCol xl="3" md="6" className="mb-3">
          <MDBCard color="red accent-2" className="classic-admin-card">
            <MDBCardBody>
              <div className="float-right">
              <MDBIcon icon="chart-bar"/>
              </div>
              <p className="white-text">ORGANIC TRAFFIC</p>
              <h4><strong>2000</strong></h4>
            </MDBCardBody>
            <div className="progress">
              <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey darken-3" role="progressbar" style={{width: "25%"}}></div>
            </div>
            <MDBCardBody>
              <p>Better than last week (75%)</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>  */}
      </MDBRow>
  )
}

export default AdminCardSection2;

