import axios from 'axios';

function requestApi(config) {
    // const baseURL = 'http://rap2api.taobao.org/app/mock/17913/api/';
    const baseURL = 'http://a0c4a00a.ngrok.io/api/';
    const defaultConfig = {
        baseURL,
        url: config.url,
        method: 'get',
        params: config.data,
        timeout: 5000
    };

    if (config.method === 'post') {
        defaultConfig.method = 'post';
        defaultConfig.params = {};
        defaultConfig.data = config.data;
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