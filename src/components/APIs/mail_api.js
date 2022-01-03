import axios from 'axios';
const API_URL = 'http://localhost:5001/nguyen-hoa/us-central1/sendMail';

const sendMail = function(msg) {
    const dest = `${API_URL}`
    console.log(msg);
    return axios({
        method: 'post',
        url: dest,
        data: msg,
        headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*'},
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export {sendMail};