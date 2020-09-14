import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';
import "./sideNav.css";

const Footer = () => {
    return (
        <MDBFooter className="text-center font-small darken-2" id="footerColor">
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: Flippay lorem ipsum companies
            </p>
        </MDBFooter>
    );
}

export default Footer;