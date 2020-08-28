import React from "react";
import './App.css';
import ParticlesContainer from "../ParticlesContainer";
import ContactPage from "../ContactPage";
import FooterPage from "../FooterPage";
import NavbarPage from "../NavbarPage";

import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";

class AppPage extends React.Component {
  render() {
    return (
      <div id="apppage">
          <div>

        <div className="header-section">
        <NavbarPage />
        <MDBView>
          {/* <MDBMask className="d-flex justify-content-center align-items-center gradient header-row">
            <MDBContainer className="intro-box">
              <MDBRow className="intro">
                <MDBCol
                  md="6"
                  className="white-text text-center text-md-left mt-xl-5 mb-5"
                >
                  <MDBAnimation type="fadeInLeft" delay=".3s" className="intro-text">
                    <h1 className="h1-responsive  mt-sm-5">
                      We Are Here For You!
                    </h1>
                    <h6 className="mb-4">
                    Always available to trade with, in time of emergencies and distress as we have an integration of several trading staffs to serve you round the clock, irrespective of your time zone.
                    </h6>
                    <div className="btn-space">
                    <MDBBtn className="btn-style">Get Started</MDBBtn>
                    <MDBBtn outline color="white" className="btn-text">
                      Sign In
                    </MDBBtn>
                    </div>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md="6" xl="5" className="mt-xl-5 image-adjust">
                  <MDBAnimation type="fadeInRight" delay=".3s">
                    <img
                      src="/images/banner_vector2.png"
                      alt=""
                      // className="img-bar"
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask> */}
          <div id="home">
  <style
    type="text/css"
    data-type="vc_shortcodes-custom-css"
    dangerouslySetInnerHTML={{
      __html:
        ".vc_custom_1528408690917{padding-top: 200px !important;padding-bottom: 50px !important;}.vc_custom_1528408690919{padding-top: 100px !important;padding-bottom: 100px !important;}.vc_custom_1527852578734{margin-top: 30px !important;}"
    }}
  />{" "}
  <style
    dangerouslySetInnerHTML={{
      __html:
        " \n\t\t\t\t\t@media (max-width: 767px) and (min-width: 320px){\n\t\t\t\t\t\t.vc_row.klb_xs_vc_custom_1528408690919{padding-top: 100px !important;padding-bottom: 100px !important;}\n\t\t\t\t\t}\n\t\t\t\t"
    }}
  />
  <div
    className="klb-bg"
  >
    <div id="banner_bg_effect" className="banner_effect" />
    <div className="container">
      <div
        data-vc-full-width="true"
        data-vc-full-width-init="false"
        className="row vc_row wpb_row vc_row-fluid vc_custom_1528408690917 vc_row-o-content-middle vc_row-flex klb_xs_vc_custom_1528408690919"
      >
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6">
          <div className="vc_column-inner  ">
            <div className="wpb_wrapper">
              <div className="banner_text">
                <div className="col-md-6"></div>
                <h1>
                  <span>Flippay</span> Landing Page
                </h1>
                <h3>We were thinking always global</h3>
                <p>
                  The highest paying Bitcoin mining pool and cloud mining
                  provider on the market. Start mining Bitcoin today!
                </p>
                <div className="banner_btn">
                  <a
                    className="btn btn-default page-scroll nav-link"
                    href="/SignIn"
                    target
                    title="WhitePaper"
                  >
                    Get Started<i className="ion-ios-arrow-thin-right" />
                  </a>{" "}
                  <a
                    className="btn btn-default page-scroll nav-link"
                    href="/SignIn"
                    target
                    title="WhitePaper"
                  >
                    Sign In<i className="ion-ios-arrow-thin-right" />
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-6">
          <div className="vc_column-inner vc_custom_1527852578734 ">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_left   banner_image_right">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper   vc_box_border_grey">
                    <img
                      width={678}
                      height={526}
                      src="/images/banner_vector2.png"
                      className="vc_single_image-img attachment-full"
                      alt
                      srcSet="http://klbtheme.com/cryptoking/blue/wp-content/uploads/sites/2/2018/06/banner_vector2.png 678w, http://klbtheme.com/cryptoking/blue/wp-content/uploads/sites/2/2018/06/banner_vector2-300x233.png 300w"
                      sizes="(max-width: 678px) 100vw, 678px"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row-full-width vc_clearfix" />
    </div>
  </div>
</div>;

        </MDBView>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%"
          }}
        >
                  <ParticlesContainer />
         
      </div>
      <main className="Description">
        <MDBContainer fluid>
        {/* <section>
          <MDBRow className="Card-block">
            <mdbCol className="col-md-6 Card-pic">
            </mdbCol>
            <mdbCol className="col-md-6 Card-text">
            <MDBAnimation reveal type="fadeInRight">
            <h4>Lorem Ipsum</h4>
              <h2>We were thinking always global</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </MDBAnimation>
            </mdbCol>
            </MDBRow>
          </section> */}
           <section id="Card">
          <MDBRow className="CardBlock row-space">
            <mdbCol className="col-md-6 cardPic">
              <MDBAnimation reveal type="fadeInLeft">
              <img src= "/images/unnamed.png" className="card-img"/>
              </MDBAnimation>
            </mdbCol>
            <mdbCol className="col-md-6 CardText">
              <MDBAnimation reveal type="fadeInRight">
              <h4>About Us</h4>
              <h2>We were thinking always global</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </MDBAnimation>
            </mdbCol>
            </MDBRow>
          </section>
          <section>
            <MDBRow className="text-center justify-content-center info-space">
            <MDBAnimation reveal type="fadeInUp">
              <mdbCol className="col-lg-8">
              <h3>Your peace of mind is assured!!!</h3>
              <h4> While you trade with <strong>FLIPPAY</strong></h4>
              <p className="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </mdbCol>
            <div className="bt-center">
              <button className="item-button">Get Started</button>
            </div>
            </MDBAnimation>
            </MDBRow>

          </section>
          <section id="About">
          <MDBRow className="About-block row-space">
            <mdbCol className="col-md-6 About-pic">
              <MDBAnimation reveal type="fadeInLeft">
              <img src= "/images/cardmapr-LQZQM_z1b-s-unsplash.jpg"/>
              </MDBAnimation>
            </mdbCol>
            <mdbCol className="col-md-6 About-text">
              <MDBAnimation reveal type="fadeInRight">
              <h4>About Us</h4>
              <h2>We were thinking always global</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
              </MDBAnimation>
            </mdbCol>
            </MDBRow>
          </section>
        </MDBContainer>
      </main>
      <ContactPage/>
      <FooterPage/>
          </div>
      </div>

    );
  }
}

export default AppPage;