import axios from "axios";

class Httphelper{
    httpClient;

    constructor(){
        this.httpClient = axios.create({
            baseURL: "izy/",
            headers: {"Content-Type": "application/json"}
        });
    }

    httpRequest(method, url, params, handleResponse = this.defaultHandler){
        switch(method){
            case 'get':
                return this.get(url, params, handleResponse);
            case 'post':
                return this.post(url, params, handleResponse);
            case 'put':
                return this.put(url, params, handleResponse);
            case 'delete':
                return this.delete(url, params, handleResponse);
            default:
                throw "invalid method";
        }
    }

    get(url, params, handleResponse){
        this.httpClient.get(url, {
            params: params
        })
        .then(handleResponse)
        .catch(error => {
            console.log(error)
        });
    }

    post(url, params, handleResponse){
        this.httpClient.post(url, {
            params: params
        })
        .then(handleResponse)
        .catch(error => {
            console.log(error)
        });
    }

    put(url, params, handleResponse){
        this.httpClient.post(url, {
            params: params
        })
        .then(handleResponse)
        .catch(error => {
            console.log(error)
        });
    }

    delete(url, params, handleResponse){
        this.httpClient.post(url, {
            params: params
        })
        .then(handleResponse)
        .catch(error => {
            console.log(error)
        });
    }

    defaultHandler(response){
        if(response.status >= 300){
            throw response.statusText;
        } else {
            return response.data;
        }
    }
}