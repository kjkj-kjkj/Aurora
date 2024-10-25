const axios = require('axios');


async function fetch() {
    return (await axios.get('https://jsonplaceholder.typicode.com/posts/1')).data
}
module.exports = fetch;