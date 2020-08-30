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
    // state = {
    //     collapsed: false
    //   };
    
    //   handleTogglerClick = () => {
    //     this.setState({
    //       collapsed: !this.state.collapsed
    //     });
    //   };
      scrollToTop = () => {
        scroll.scrollToTop();
      };
    render() {
        // const overlay = (
        //     <div
        //       id="sidenav-overlay"
        //       style={{ backgroundColor: "transparent" }}
        //       onClick={this.handleTogglerClick}
        //     />
        //   );
        return (
          //   <div>
          //   <MDBNavbar
          //     color="primary-color"
          //     dark
          //     expand="md"
          //     fixed="top"
          //     scrolling
          //     transparent
          //     id="navbar"
          //   >
          //     <MDBContainer>
          //       <MDBNavbarBrand>
          //         <MDBNavLink to= "/">
          //           <img 
          //           src="/images/IMG-20200317-WA0134-removebg.png" 
          //           className="icon-image" 
          //           alt="aligment"
          //           onClick={this.scrollToTop}
          //           />
          //         </MDBNavLink>
          //       </MDBNavbarBrand>
          //       <MDBNavbarToggler onClick={this.handleTogglerClick} />
          //       <MDBCollapse isOpen={this.state.collapsed} navbar>
          //         <MDBNavbarNav left>
          //         <MDBNavItem active className="btn-margin">
          //             <Link 
          //             to="/"
          //             spy={true}
          //             smooth={true}
          //             offset={-70}
          //             duration={500}
          //             className="button-style"
          //             onClick={this.scrollToTop}
          //             >Home</Link>
          //           </MDBNavItem>
          //           <MDBNavItem>
          //           <MDBNavLink 
          //             to="#!"
          //             spy={true}
          //             smooth={true}
          //             offset={-70}
          //             duration={500}
          //             >Lorem</MDBNavLink>
          //           </MDBNavItem>
          //           <MDBNavItem className="btn-margin">
          //           <Link 
          //             to="About"
          //             spy={true}
          //             smooth={true}
          //             offset={-70}
          //             duration={500}
          //             className="button-style"
          //             ><HoverText>About</HoverText></Link>
          //           </MDBNavItem>
          //           <MDBNavItem className="btn-margin">
          //           <Link 
          //           to="contact-div" 
          //           smooth={true} 
          //           duration={500}
          //           className="button-style"
          //           ><HoverText>contact</HoverText></Link>
          //         </MDBNavItem>
          //         </MDBNavbarNav>
          //         <MDBNavbarNav right>
          //           <MDBNavItem>
          //           <MDBNavLink className="link-adjustment btn-empty" to="/SignIn">Sign In</MDBNavLink>
          //           </MDBNavItem>
          //           <MDBNavItem>
          //           <Link to="contact-div" 
          //                     smooth={true} 
          //                     duration={500}
          //                     className="inkStyle">
          //               <MDBBtn className="btn-style" >
          //                 Get In Touch                 
          //               </MDBBtn>
          //           </Link> 
          //           </MDBNavItem>
          //         </MDBNavbarNav>
          //       </MDBCollapse>
          //     </MDBContainer>
          //   </MDBNavbar>
          //   {this.state.collapsed && overlay}
          // </div>
          <div>
          <nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
          <div class="container-fluid nav-adjust">
              <Link to= "/">
                     <img 
                    src="/images/IMG-20200317-WA0134-removebg.png" 
                    className="icon-image" 
                    alt="aligment"
                    onClick={this.scrollToTop}
                    />
                  </Link>
                  {/* <button 
                    type="button" 
                    class="navbar-toggle" 
                    data-toggle="collapse" 
                    data-target=".navbar-collapse"
                    aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                  </button> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                  <ul class="navbar-nav ml-auto navbar-center" id="mySidenav">
                      <li class="nav-item font-weight-600 active">
                      <Link 
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                       >Home</Link>
                      </li>
                      <li class="nav-item">
                      <Link 
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                       >Rates</Link>
                      </li>
                      <li class="nav-item">
                      <Link 
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={this.scrollToTop}
                       >Products</Link>
                      </li>
                      <li class="nav-item">
                      <Link 
                        to="About"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                       >About</Link>
                      </li>
                      <li class="nav-item">
                      <Link 
                        to="contact-div" 
                        smooth={true} 
                        duration={500}
                     >contact</Link>
                      </li>
                      <li class="nav-item">
                      <Link className="link-adjustment btn-empty" to="/SignIn">Sign In</Link>
                      </li>
                  </ul>
                  <Link to="contact-div" 
                              smooth={true} 
                              duration={500}
                              className="inkStyle">
                         <MDBBtn className="btn-style navbar-btn" >
                          Get In Touch                 
                         </MDBBtn>
                    </Link> 
              </div>
          </div>
      </nav>
      </div>
        )
    }
}



