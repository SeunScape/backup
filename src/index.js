import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Routes from './Routes';
import axios from 'axios';



import { BrowserRouter} from 'react-router-dom';
import dashboard from "./components/dashboard/dashboard";
const App = () => {
    return(
        <BrowserRouter>
        <div>
            <dashboard/>
            <Routes/>
        </div>
        </BrowserRouter>
    )
}
window.axios=axios;

ReactDOM.render(<App/>, document.getElementById('root'));
