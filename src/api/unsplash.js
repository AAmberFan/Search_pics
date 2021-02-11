import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID gCNNAJ3_XNxpMBmKPrbZvRCzew967wJ5FVW4jQKQEDM'
    }
})