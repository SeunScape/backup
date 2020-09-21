import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';
import './Breadcrum.css';
const AdminCardSection1 = () => {
  return (
    <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card account-card naira-card">
              <MDBCardBody>
                <div>
                  <h4>Account Balance </h4>
                  <h5>NGN 0</h5>
                  <div className= "icon-data">
                  <i class="fas fa-money-bill-alt"></i>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card account-card">
          <MDBCardBody>
                <div>
                  <h4>Bitcoin Wallet Balance</h4>
                  <h5>BTC 0</h5>
                  <div className= "icon-data">
                  <i class="fab fa-bitcoin"></i>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default AdminCardSection1;

