import request from './request';

function fetchQuestions() {
    return request({
        url: 'fetchQuestions'
    }).then(data => {
        return data;
    });
}

export default fetchQuestions;