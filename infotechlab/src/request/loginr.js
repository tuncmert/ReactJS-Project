import axios from "axios";
import { apiUrl } from "./apiConfig";
let options = {
    method: '',
    url: apiUrl,
    params: {},
    headers: '',
    data: {}
}

export const submitHandle = (e, loginModel) => {
    e.preventDefault();
    options.method = 'POST';
    options.url = `${apiUrl}/Auth/Authenticate`;
    options.headers = `Content-Type': 'application/json`;
    options.data = {
        username: loginModel.mail, password: loginModel.password, usertype: loginModel.usertype
    }
    const dataPromise = axios.request(options).then((response) => response.data).catch(function (error) {
        console.error(error);
    });
    return dataPromise;

}

export const kayitOl = (e, user) => {
    e.preventDefault();
    options.method = 'POST';
    options.url = `${apiUrl}/User`;
    options.headers = `Content-Type': 'application/json`;
    options.data = {
        username: user.mail, password: user.password, usertype: user.usertype
    }
    const dataPromise = axios.request(options).then((response) => response.data).catch(function (error) {
        console.error(error);
    });
    return dataPromise;

}
export const checkToken = (token) => {
    options.method = 'GET';
    options.url = `${apiUrl}/Auth/ValidateToken`;
    options.params = {
        token: token
    }
    options.headers = `Content-Type': 'application/json`;
    const dataPromise = axios.request(options).then((response) => response.data).catch(function (error) {
        console.error(error);
    });
    return dataPromise;
}