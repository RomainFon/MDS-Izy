import axios from "axios";

class Httphelper{

    constructor(){
        //Changer l'url ici avec ngrok
        this.baseURL= "http://d9e6a88c.ngrok.io/api/";
    }

    httpRequest(method, url, params){
        switch(method){
            case 'get':
                return this.get(url, params);
            case 'post':
                return this.post(url, params);
            case 'put':
                return this.put(url, params);
            case 'delete':
                return this.delete(url, params);
            default:
                throw "invalid method";
        }
    }

    async get(url, params){
        return await axios.get(this.baseURL + url, params)
            .then(response => { return response.data })
            .catch(error =>  { throw error.response});
    }

    async post(url, params){
        return await axios.post(this.baseURL + url, params)
            .then(response => { return response.data })
            .catch(error =>  { throw error.response});
    }

    async put(url, params){
        return await axios.put(this.baseURL + url, params)
            .then(response => { return response.data })
            .catch(error =>  { throw error.response});
    }

    async delete(url, params){
        return await axios.delete(this.baseURL + url, params)
            .then(response => { return response.data })
            .catch(error =>  { throw error.response});
    }
}

export default Httphelper;