var log4js = require('log4js');

module.exports = () => {
    return {
        getConfiguredLogger: () => {

            log4js.configure({
                "appenders": [{
                    "type": "log4js-protractor-appender"
                }]
            });

            return log4js.getLogger();
        }
    }
};