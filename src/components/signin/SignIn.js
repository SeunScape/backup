import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol,MDBInput, MDBBtn } from "mdbreact";
import { Postdata } from './Postdata';
import {Redirect} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import './signInStyle.css';
import { Link} from 'react-router-dom';
import axios from 'axios';
 class signIn extends Component {
   
    constructor(props){
        super(props);
        
        this.state={
            email:'',
            password:'',
            emailError: '',
            passwordError: '',
            isLogin:false
        }
        this.login =this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login = e =>{
        e.preventDefault();

        const data = {
            email:this.state.email,
            password: this.state.password
        }

        const isValid = this.validate();
            if (isValid) {
                // if(this.state.email && this.state.password){
                    axios.post('login', data)
                    .then(res => {
                        localStorage.setItem('token', res.data.token)
                        const { history } = this.props;
                        history.push("/dashboard")
                        // this.props.history.push('/dashboard')
                        // this.context.history.push('/dashboard')
                        // this.context.router.transitionTo('/dashboard')
                    })
                        .catch(err => {
                        console.log(err);
         })

                            // }        
            }
        // const data = {
        //     email:this.state.email,
        //     password:this.state.password,
        // }
        // e.preventDefault();
        // axios.post('login', data)
        // .then(res => {
        //     localStorage.setItem('token', res.data.token);
        //     this.context.router.history.push({
        //         pathname:'/dashboard',
        //         state: { token: JSON.stringify(res.data) }
        //     });
        //     this.setState({isLogin: true});
        // })
        // .catch(function (error) {
        //     console.log(error.message);
        // })
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
        // if(this.state.isLogin){
        //     return <Redirect to= "/dashboard" />
        // }

        // if(localStorage.getItem("token")){
        //     return(<Redirect to= "/dashboard"/>)
        // }
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
export default withRouter(signIn);