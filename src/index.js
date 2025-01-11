const axios = require('axios');


async function fetch(url) {
    return (await axios.get(url));
}
module.exports = fetch;