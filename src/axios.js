import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.flippay.co/'
});
export default instance;