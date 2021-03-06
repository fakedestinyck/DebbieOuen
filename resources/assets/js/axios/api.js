import {req} from './request.js';

export function axios(url,method,data,token,params) {
    let options = {
        url: url,
        method: method
    };
    if (data != undefined && Object.keys(data).length > 0) {
        options['data'] = data;
    }
    if (token != undefined && token !== '') {
        options['headers'] = {'Authorization': 'Bearer '+token};
    }
    if (params != undefined && Object.keys(params).length > 0) {
        options['params'] = params;
    }
    
    return req(options);
}