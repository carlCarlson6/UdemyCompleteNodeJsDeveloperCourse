import request from 'request';
import axios from 'axios';

const url = 'http://api.weatherstack.com/current?access_key=709d84e2dbd148be34b4f1edefce8dd8&query=losa del obispo';

const requestOptions = {
    url: url,
    json: true
}

//let reqResponse: request.Response;
//request(requestOptions, (error, response) => {
//    reqResponse = response;
//})
//console.log(reqResponse.body.current);

const response = axios.get(url);

console.log(response.body.current)