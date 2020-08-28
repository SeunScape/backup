import React from 'react'
import {  MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import './About.css';
export default function About() {
    return (
        <div>
             <section>
             <MDBRow className="About-block">
            <MDBCol className="col-md-6 About-pic">
              <MDBAnimation reveal type="fadeInLeft">
              <img src= "/images/cardmapr-LQZQM_z1b-s-unsplash.jpg"/>
              </MDBAnimation>
            </MDBCol>
            <MDBCol className="col-md-6 About-text">
              <MDBAnimation reveal type="fadeInRight">
              <h4>About Us</h4>
              <h2>We were thinking always global</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </MDBAnimation>
            </MDBCol>
            </MDBRow>
             </section>
        </div>
    )
}
