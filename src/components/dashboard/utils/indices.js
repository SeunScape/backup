import { Postdata } from '../../SignIn/Postdata';

export const isLogin = () => {
    if (localStorage.getItem("userData")) {
        return true;
    }

    return false;
}
export const logger = () => {
    Postdata('login', this.state).then((result) =>{
        let responseJSON = result;
            localStorage.setItem('token', responseJSON.message.token);
                // this.setState({redirect:true});
                 // console.log(responseJSON)
            }
                );
}








