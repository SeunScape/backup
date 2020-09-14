import React, { Component } from 'react';
import { Putdata } from './Putdata';
import { MDBContainer, MDBRow, MDBCol,MDBInput, MDBBtn } from "mdbreact";
import './signUpStyle.css';
import { Link } from 'react-router-dom';

 class signIn extends Component {
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:'',
            username:'',
            phone:'',
            fname:'',
            emailError: '',
            passwordError: '',
            usernameError:'',
            phoneError:'',
            fnameError:''
        }
        this.signup =this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    signup(){
        Putdata('signup', this.state).then((result) =>{
            let responseJSON = result;
            console.log(responseJSON);
            // localStorage.setItem('token', responseJSON.message.token);
        });
}
validate = ()=> {
    let emailError= '';
    let passwordError= '';
    let usernameError='';
    let phoneError='';
    let fnameError='';

    if(!this.state.email.includes('@')){
        emailError = 'invalid email';
    }
    if (emailError){
        this.setState({emailError});
        return false;
    }
    //password
    const passwordRegex = /(?=.*[0-9])/;

    if(!this.state.password){
        passwordError = 'required';
    }
    else if(this.state.password.length < 8){
        passwordError = "password must be eight characters long"
    }
    else if(!passwordRegex.test(this.state.password)){
        passwordError = "Invalid password, must contain one number"
    }
    if (passwordError){
        this.setState({passwordError});
        return false;
    }
    //username
    if(!this.state.username){
        usernameError = 'required';
    }
    else if(!passwordRegex.test(this.state.username)){
        usernameError = "Invalid password, must contain one number"
    }
    if (usernameError){
        this.setState({usernameError});
        return false;
    }
    //Name
    if(!this.state.fname){
        fnameError = 'required';
    }
    if(typeof this.state.fname !== "undefined"){
        if(!this.state.fname.match(/^[a-zA-Z]+$/)){
            fnameError = "Only letters";
        }
    }
    if(fnameError){
        this.setState({fnameError});
        return false;
    }
    //phone
    return true;
}


    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                 {/* <h2>Login Page</h2>
                <label>Email</label>
                <input type="text" name="email" placeholder="email" onChange={this.onChange}/>
                <label>Password</label>
                <input type="password" name="password" placeholder="password" onChange={this.onChange}/>
                <label>username</label>
                
                <label>Phone number</label>

                <label>fname</label> */}
                        <MDBContainer fluid className="contain">
            <MDBRow className="row-block">
            <MDBCol size="6" className="form-style row-no-padding formStyle" sm="6" md="5" lg="6">
            <div className="form-wrapper">
            <div className="signIn-form">
                <h1 className="h5 text-center mb-4">Sign Up to Flippay</h1>
                <p>Use your credentials to login into account.</p>
                {/* <div className="grey-text"> */}
                <div>
                <div className="textbox">
                <i class="fas fa-user-circle" aria-hidden="true"></i>
                <input type="fname" name="fname" placeholder="full name" onChange={this.onChange}></input>
                </div>
                <div style={{ color:"red"}}>
                    {this.state.fnameError}
                </div>
                <div className="textbox">
                <i class="fas fa-user icon-user"  aria-hidden="true"></i>
                <input type="username" name="username" placeholder="username" onChange={this.onChange}></input>
                </div>
                <div style={{ color:"red"}}>
                    {this.state.usernameError}
                </div>
                <div className="textbox">
                <i class="fas fa-phone-alt" aria-hidden="true"></i>
                <input type="tel" id="phone" name="phone" placeholder="phone" onChange={this.onChange}/>
                </div>
                <div style={{ color:"red"}}>
                    {this.state.phoneError}
                </div>
                <div className="textbox"> 
                <i class="fas fa-envelope" aria-hidden="true"></i>
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
                <Link to="/SignIn">Already have an account? Sign in</Link>
                {/* <MDBBtn type="submit" value="login" className="button" onClick={this.login} className="form-btn">Sign Up</MDBBtn> */}
                <input type="submit" value="signUp" className="button" onClick={this.signup}/>
                {/* <input type="submit" value="login" className="button" onClick={this.login}/> */}
                </div>
            </div>
            </div>
            </MDBCol>
            <MDBCol size="6" sm="6" md="5" lg="6" className="form-style row-no-padding">
                <div className="img-styler">
                    <div className="overLay">
                        <h2>Hello There! Join Us</h2>
                        <p>Lorem dolore elit cillum nostrud ex in minim et.</p><br/>
                        <Link to="/SignIn" className="btn-con"><button type="button" className="btn btn-rounded bt-background">Sign In</button></Link>
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