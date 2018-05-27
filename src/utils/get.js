const queryString = require('querystring')
import axios from 'axios'

async function get(url, query, token = '122223') {
    let header = {};
    if (token) {
        header = {
            Authorization: token
        }
    } else {
        header = {}
    }
    const response = await axios(`${url}?${queryString.stringify(query)}`, {
        method: 'GET',
        headers: {
            ...header
        }
    })
    return response
}
export {
    get
}