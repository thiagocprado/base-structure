const VERSION = "1.0.0";
const BUILD = 0;

module.exports = {
    getVersion: function () {
        return {
            version: VERSION,
            build: BUILD,
        };
    }
};
