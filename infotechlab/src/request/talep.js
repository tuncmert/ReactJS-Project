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

export const getTalep = (token, id) => {
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'GET';
    options.url = `${apiUrl}/Talep/${id}`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}
export const getTalepByUsta = (token, id) => {
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'GET';
    options.url = `${apiUrl}/Talep/ustaid/${id}`;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}

export const addTalep = (token, talep) => {
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'Post';
    options.url = `${apiUrl}/Talep`;
    options.headers.contentType = 'application/json';
    options.data = talep;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}
export const editTalep = (e, token, talep) => {
    e.preventDefault();
    options.headers.Authorization = `Bearer ${token}`;
    options.method = 'PUT';
    options.url = `${apiUrl}/Talep`;
    options.headers.contentType = 'application/json';
    options.data = talep;

    const promise = axios.request(options);
    const dataPromise = promise.then((response) => response.data);
    return dataPromise;
}