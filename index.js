const axiosImport = require('axios');

const axios = axiosImport.create({
    baseURL: "http://api.whatpulse.org/"
});

/**
 *
 * @param options - Object with all Options. View them here: http://developer.whatpulse.org/#team-stats
 * @returns {Promise<void>}
 */
async function getTeam(options) {
    if(!options.team) throw new Error('No Team given');
    const response =  await axios({
        method: "GET",
        url: "team.php" + jsonToQueryString(options)
    });
    return response.data
}

/**
 *
 * @param options - Object with all Options. View them here: http://developer.whatpulse.org/#pulse-stats
 * @returns {Promise<*>}
 */
async function getPulses(options) {
    if(!options.team && !options.user) throw new Error('No Team/User given');
    const response =  await axios({
        method: "GET",
        url: "pulses.php" + jsonToQueryString(options)
    });
    return response.data
}

/**
 *
 * @param options - Object with all Options. View them here: http://developer.whatpulse.org/#user-stats
 * @returns {Promise<*>}
 */
async function getUser(options) {
    if(!options.user) throw new Error('No User given');
    const response =  await axios({
        method: "GET",
        url: "user.php" + jsonToQueryString(options)
    });
    return response.data
}

module.exports = {
    getTeam: getTeam,
    getPulses: getPulses,
    getUser: getUser
};


function jsonToQueryString(json) {
    if(!json.format) json.format = 'json';
    return '?' +
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}