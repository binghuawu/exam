import request from './request';

function queryAll() {
    return request({
        url: 'queryAll'
    }).then(data => {
        return data;
    });
}

function query(userId) {
    return request({
        url: 'query/' + userId,
    }).then(data => {
        return data;
    });
}

export default {
    queryAll,
    query
};