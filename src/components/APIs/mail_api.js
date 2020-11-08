import axios from 'axios';
const API_URL = 'https://nguyen-hoa.com/api';

const sendMail = function(msg) {
    const dest = `${API_URL}/sendmail`

    return axios({
        method: 'post',
        url: dest,
        data: msg,
        headers: {'Content-Type': 'application/json'},
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export {sendMail};