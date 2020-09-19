import { Postdata } from '../../signin/Postdata';

export const isLogin = () => {
    // if (localStorage.getItem("userData")) {
    //     return true;
    // }

    // return false;
}
export const logger = () => {
    Postdata('login').then((result) =>{
        let responseJSON = result;
            // localStorage.setItem('token', responseJSON.message.token);
                // this.setState({redirect:true});
                 console.log(responseJSON)
            }
                );
}








