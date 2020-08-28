import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn,
    MDBContainer,
  } from "mdbreact";
  import './NavbarPage.css';
export default class NavbarPage extends Component {
    state = {
        collapsed: false
      };
    
      handleTogglerClick = () => {
        this.setState({
          collapsed: !this.state.collapsed
        });
      };
      scrollToTop = () => {
        scroll.scrollToTop();
      };
    render() {
        const overlay = (
            <div
              id="sidenav-overlay"
              style={{ backgroundColor: "transparent" }}
              onClick={this.handleTogglerClick}
            />
          );
          const HoverText = styled.p`
          color: white;
          :hover {
            color: #26b6d4;
            cursor: pointer;
          }
    `
        return (
            <div>
            <MDBNavbar
              color="primary-color"
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
              id="navbar"
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <MDBNavLink to= "/">
                    <img 
                    src="/images/IMG-20200317-WA0134-removebg.png" 
                    className="icon-image" 
                    alt="aligment"
                    onClick={this.scrollToTop}
                    />
                  </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                  <MDBNavItem active className="btn-margin">
                      <Link 
                      to="/"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="button-style"
                      onClick={this.scrollToTop}
                      >Home</Link>
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink 
                      to="#!"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      >Lorem</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className="btn-margin">
                    <Link 
                      to="About"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="button-style"
                      ><HoverText>About</HoverText></Link>
                    </MDBNavItem>
                    <MDBNavItem className="btn-margin">
                    <Link 
                    to="contact-div" 
                    smooth={true} 
                    duration={500}
                    className="button-style"
                    ><HoverText>contact</HoverText></Link>
                  </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                    <MDBNavLink className="link-adjustment btn-empty" to="/SignIn">Sign In</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                    <Link to="contact-div" 
                              smooth={true} 
                              duration={500}
                              className="inkStyle">
                        <MDBBtn className="btn-style" >
                          Get In Touch                 
                        </MDBBtn>
                    </Link> 
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        )
    }
}



