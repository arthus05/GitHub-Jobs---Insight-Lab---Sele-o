import axios from 'axios';

const API = axios.create({
    baseURL: 'https://jobs.github.com'
});

export default API;