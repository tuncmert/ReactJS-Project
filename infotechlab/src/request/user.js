

import axios from "axios";
import { apiUrl } from "./apiConfig";
let options = {
    method: '',
    url: apiUrl,
    headers: {
        Authorization: '',
        contentType: ''
    },
    data: {}
}


export const getUser = (token, id) => {
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'GET';
    options.url = `${apiUrl}/User/${id}`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}


export const getUsta = (token, id) => {
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'GET';
    options.url = `${apiUrl}/Usta/${id}`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

export const editUser = (e,token, user) => {
    e.preventDefault();
    user.token=token;
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'PUT';
    options.url = `${apiUrl}/User`;
    options.headers.contentType = 'application/json';
    options.data = user;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}