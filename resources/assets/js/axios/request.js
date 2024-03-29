require('../bootstrap');

export function req(options) {
    return new Promise((resolve, reject) => {
        const instance = axios.create({
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            timeout: 1000*10
        });
        instance(options)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.log('axios错误：' + error)
                reject(error.response ? error.response.data : {code: 400, data: error.message});
            })
    });
}
