import axios from 'axios';

function requestApi(config) {
    // http://1bf8acfd.ngrok.io/api/queryAll
    // const baseURL = 'http://rap2api.taobao.org/app/mock/17913/api/';
    const baseURL = 'http://1bf8acfd.ngrok.io/api/';
    const defaultConfig = {
        baseURL,
        url: config.url,
        method: 'get',
        params: config.data,
        timeout: 1000
    };

    if (config.method === 'post') {
        defaultConfig.method = 'post';
        defaultConfig.params = {};
        defaultConfig.data = config.data;
        defaultConfig.headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
    }

    return new Promise((resolve, reject) => {
        axios(defaultConfig).then(response => {
            if (response.status === 200) {
                resolve(response.data);
            } else {
                reject('err');
            }
        }).catch(err => {
            reject(err);
        });
    });
}

export default requestApi;