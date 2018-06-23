import request from './request';

function fetchQuestions() {
    return request({
        url: 'fetchQuestions'
    }).then(data => {
        return data;
    });
}

function submitQuestions(data) {
    return request({
        url: 'submit',
        method: 'post',
        data
    }).then(data => {
        return data;
    });
}

export default {
    fetchQuestions,
    submitQuestions
};