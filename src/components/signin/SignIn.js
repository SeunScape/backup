import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBInput, MDBBtn } from "mdbreact";
import { Postdata } from './Postdata';
import {Redirect} from 'react-router-dom';
import './signInStyle.css';
import { Link } from 'react-router-dom';
import { isLogin } from './indexRoute';

export const responseJSON = true;
 class signIn extends Component {
   
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:'',
            emailError: '',
            passwordError: '',
            redirect:false
        }
        this.login =this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
        login(){
        const isValid = this.validate();
            if (isValid) {
                // if(this.state.email && this.state.password){
                    Postdata('login', this.state).then((result) =>{
                        let responseJSON = result;
                            localStorage.setItem('token', responseJSON.message.token);
                                this.setState({redirect:true});
                                 // console.log(responseJSON)
                            }
                                );
                            // }        
            }
    }
// validate = yup.object().shape({
//     email: Yup.string()
//     .email()
//     .required("Required"),
//     password: Yup.string()
//     .password()
//     .password("Required")
//     .min(8, "password is too short")
//     .matches(/(?=.*[0-9])/, "Password must contain a number")
// })

    validate = ()=> {
        let emailError= '';
        let passwordError= '';

        if(!this.state.email.includes('@')){
            emailError = 'invalid email';
        }
        if (emailError){
            this.setState({emailError});
            return false;
        }

        const passwordRegex = /(?=.*[0-9])/;

        if(!this.state.password){
            passwordError = 'required';
        }
        else if(this.state.password.length < 8){
            passwordError = "password must be eight characters long"
        }
        // else if(!passwordRegex.test(this.state.password)){
        //     passwordError = "Invalid password, must contain one number"
        // }
        if (passwordError){
            this.setState({passwordError});
            return false;
        }
        return true;
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        if(this.state.redirect){
            return <Redirect to= "/dashboard" />
        }

        if(localStorage.getItem("userData")){
            return(<Redirect to= "/dashboard"/>)
        }
        return (
            <div>
                        <MDBContainer fluid className="contain">
            <MDBRow className="row-block">
            <MDBCol size="6" className="form-style row-no-padding formStyle" sm="6" md="5" lg="6">
            <div className="form-wrapper">
            <div className="signIn-form">
                <h1 className="h5 text-center mb-4">Sign In to Flippay</h1>
                <p>Use your credentials to login into account.</p>
                <div className="grey-text">
                <div className="textbox"> 
                <i class="fas fa-user icon-user"  aria-hidden="true"></i>
                <input type="text" name="email" placeholder="email" onChange={this.onChange}/>
                </div>
                <div style={{ color:"red"}}>
                    {this.state.emailError}
                </div>
                <div className="textbox"> 
                <i class="fas fa-lock" aria-hidden="true"></i>
                <input type="password" name="password" placeholder="password"  onChange={this.onChange}/>
                </div>
                <div style={{ color:"red"}}>
                    {this.state.passwordError}
                </div>
                </div>
                <div className="text-center connect">
                <Link to="/SignUp">Use your credentials to create account.</Link>
                {/* <MDBBtn type="submit" value="login" className="button" onClick={this.login} className="form-btn">Login</MDBBtn> */}
                <input type="submit" value="login" className="button" onClick={this.login}/>
                </div>
            </div>
            </div>
            </MDBCol>
            <MDBCol size="6" sm="6" md="5" lg="6" className="form-style row-no-padding">
                <div className="img-styler">
                    <div className="overLay">
                        <h2>Hello There! Join Us</h2>
                        <p>Lorem dolore elit cillum nostrud ex in minim et.</p><br/>
                        <button type="button" className="btn btn-rounded bt-background">Sign Up</button>
                    </div>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
             {/* <div>
                 <h2>Login Page</h2>
                 <label>Email</label>
                 <input type="text" name="email" placeholder="email" onChange={this.onChange}/>
                 <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                 <input type="submit" value="login" className="button" onClick={this.login}/>
                  </div> */}
            </div> 
        )
    }
}

export default signIn;
