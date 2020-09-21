import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Routes from './Routes';
import { BrowserRouter} from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.flippay.co/';
// import Dashboard from "./components/dashboard/dashboard";
const App = () => {
    return(
        <BrowserRouter>
            {/* <Dashboard/> */}
            <Routes/>
        </BrowserRouter>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));
