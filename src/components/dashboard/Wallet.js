import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBContainer,MDBBtn,MDBListGroup, MDBListGroupItem,MDBFooter } from 'mdbreact';
import {Link} from 'react-router-dom';
import "./wallet.css";
import SideNavigation from './sideNavigation';
import BreadcrumSection from './pages/sections/BreadcrumSection';
import BackButton from './pages/BackButton';

class Wallet extends Component {
  constructor(props){
    super(props);
    this.goBack = this.goBack.bind(this);
  }
  
  goBack(){
      this.props.history.goBack();
  }
  
  render(){
      return (
        <>

        <SideNavigation/>
        <BreadcrumSection/>
            <MDBContainer/>
        {/* <button onClick={this.context.router.history.goBack()}>Back</button> */}
        <button onClick={this.goBack} style={{marginLeft:"360px"}}>Go Back</button>
      <MDBRow className="mb-4 walletStyle">
        <MDBCol md="8" className="mb-3">
          <MDBCard className="classic-admin-card">
              <div  id="wrap">
              <MDBCardBody>
                <div id="bColor">
                    {/* <div id="wallStreet"><h3>BTC WALLET</h3></div>
                    <div id="bitColor"><h3>Balance: 0.00000BTC</h3></div> */}
                </div>
                {/* <MDBRow id="bColor">
                    <MDBCol id="wallStreet"><h3>BTC WALLET</h3></MDBCol>
                    <MDBCol id="bitColor"><h3>Balance: 0.00000BTC</h3></MDBCol>
                </MDBRow> */}
                        <input type="text" id="exampleDisabled" className="form-control" placeholder="WALLET BALANCE: 0.000BTC" disabled />
            </MDBCardBody>
            <div style={{marginLeft:"15px"}}>
            <p color={{color: "black"}}>Send Bitcoin</p>
            <label htmlFor="formGroupExampleInput">To</label>
            <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
        <i class="fas fa-wallet"></i>
        </span>
      </div>
      <input type="text" className="form-control" placeholder="Wallet Address" style={{marginRight:"15px"}} aria-label="Username" aria-describedby="basic-addon" />
    </div>
    <MDBRow id="exChange">
        <MDBCol md="6">
        <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
        <i class="fab fa-bitcoin"></i>
        </span>
      </div>
      <input type="text" className="form-control" placeholder="Bitcoin" aria-label="Username" aria-describedby="basic-addon" />
    </div>
        </MDBCol>
        <MDBCol md="6">
        <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon">
        <i class="fas fa-dollar-sign"></i>
        </span>
      </div>
      <input type="text" className="form-control" placeholder="Dollar Value" style={{marginRight:"15px"}} aria-label="Username" aria-describedby="basic-addon" />
    </div>
        </MDBCol>
    </MDBRow>
    <MDBRow id="btn-margin">
        <MDBCol md="6">
        <MDBBtn color="primary" style={{marginBottom:"20px"}}><i class="fas fa-paper-plane" style={{paddingRight:"5px", fontSize:"14px"}}></i> SEND </MDBBtn>
        </MDBCol>
        <MDBCol md="6">
        <MDBBtn class="btn btn-warning" style={{marginBottom:"20px"}}><i class="fa fa-close" style={{paddingRight:"5px", fontSize:"14px"}}></i> CANCEL </MDBBtn>
        </MDBCol>
    </MDBRow>
            </div>
              </div>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-3">
          <MDBCard className="classic-admin-card">
            <MDBCardBody>
                <h4 style={{color:"black"}}>Receive Bitcoin</h4>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
              <MDBCardBody>
              <h6 style={{color:"black"}}>Receive Bitcoin with the address below:</h6>
              <div id="siv-icon"><Link to="#" id="copyText"><i class="far fa-copy"></i></Link></div>
              <p style={{fontWeight:"600" }}>How to send Bitcoin</p>
              <MDBListGroup style={{ width: "22rem", border:"none" }}>
                <MDBListGroupItem style={{border:"none" }}> * Cras justo odio</MDBListGroupItem>
                <MDBListGroupItem style={{border:"none" }}> * Dapibus ac facilisis in</MDBListGroupItem>
                <MDBListGroupItem style={{border:"none" }}> * Morbi leo risus</MDBListGroupItem>
            </MDBListGroup>
              </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
    <MDBContainer/>
    <MDBFooter className="text-center font-small darken-2" id="feetColor" style={{bottom:0}}>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: Flippay lorem ipsum companies
            </p>
    </MDBFooter>
        </>
  )
  }
}
export default Wallet;