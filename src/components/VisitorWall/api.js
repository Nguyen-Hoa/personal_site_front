import axios from 'axios';
const API_URL = process.env.REACT_APP_API_ADDR + '/api';

const addMessage = (shop) => {
    const dest = `${API_URL}/visitor_wall_message`;
    console.log(shop);

    return axios({
        method: 'post',
        url: dest,
        data: shop,
        headers: {'Content-Type': 'application/json'},
    })
        .then((res) => {
            return res.data.data;
            }
        )
        .catch((error) => {
            console.log(error);
        });
}

const getMessages = () => {
    const dest = `${API_URL}/visitor_wall_message`;

    return axios({
        method: 'get',
        url: dest,
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

const getMessage = (id) => {
    const dest = `${API_URL}/visitor_wall_message/${id}`;

    return axios({
        method: 'get',
        url: dest,
    })
        .then((res) => {
            return res.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
}

export {addMessage, getMessage, getMessages};