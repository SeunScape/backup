import React, { Component } from 'react'
import './ContactPage.css';
export default class ContactPage extends Component {
    render() {
        return (
                <section className="section contact-section" id="contact-div">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="title text-center mb-5">
                                    <h3 className="mb-3">Contact Us</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                            <div className="col-lg-10">
                                <div className="custom-form">
                                    <div id="message"></div>
                                    <form  id="contact-form">
                                    <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                    <input name="name" id="name" class="form-control" placeholder="Your name" type="text"></input>
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group mt-2">
                                                    <input name="email" id="email" class="form-control" placeholder="Your Email" type="email"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" id="subject" placeholder="Your Subject.." type="text"></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <textarea name="comments" id="comments" rows="4" class="form-control" placeholder="Your Message...."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center">
                                            <div class="col-lg-12 mt-3">
                                                <input id="submit" name="send" class="submitBnt btn btn-sm btn-custom btn-round" value="Send Message" type="submit"></input>
                                                    <div id="simple-msg"></div>
                                            </div>
                                        </div>
                                    </form>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}
