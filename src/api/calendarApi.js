import axios from 'axios';
import {getEnvVariables} from "../helpers/index.js";

const {VITE_API_URL} = getEnvVariables();


const calendarApi = axios.create({
    baseURL: VITE_API_URL
});

// TODO: CONFIGURE INTERCEPTORES

export default calendarApi;