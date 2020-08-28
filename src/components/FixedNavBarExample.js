import React from 'react';
import { MDBContainer, 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavbarToggler, 
    MDBCollapse, 
    MDBNavItem, 
    MDBNavLink,    
    MDBDropdown,
    MDBDropdownToggle, 
    MDBDropdownMenu, 
    MDBDropdownItem,
    MDBBtn,
     MDBIcon } from 'mdbreact';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#000080'}
    return(
      <div>
            <MDBNavbar style={bgPink} dark expand="md" scrolling fixed="top">
                <MDBNavbarBrand>
                  <img src="/images/IMG-20200317-WA0134-removebg.png" className="icon-image" alt="aligment"/>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.onClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Discounts</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="#!">Newsletter</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to="/contactPage">Contact</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink to="#/">Contact</MDBNavLink>
                  </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                    <MDBNavLink className="link-adjustment btn-empty" to="#!">Sign In</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBBtn className="btn-style">
                      Get In Touch
                    </MDBBtn>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
      </div>
    );
  }
}

export default FixedNavbarExample;