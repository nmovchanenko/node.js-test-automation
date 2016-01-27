
module.exports = () => {
    const SELENIUM_CLASSES = "org.openqa.selenium.remote.server.DriverServlet org.openqa.selenium.remote.server.rest.ResultConfig.handle ";

    const isExecuting = (log) => {
        return log.match(/Executing/);
    };

    const isGetText = (log) => {
        return log.match(/get text/);
    };

    const isSendKeys = (log) => {
        return log.match(/send keys/);
    };

    const isFindElements = (log) => {
        return log.match(/find elements/);
    };

    const isClick = (log) => {
        return log.match(/click/);
    };

    const isClear = (log) => {
        return log.match(/clear/);
    };

    const showLog = (log) => {
        if (isClick(log) || isGetText(log) || isSendKeys(log) || isFindElements(log) || isClear(log)) {
            logger.info(modifyLogString(log));
        }
    };

    const modifyLogString = (log) => {
        return log.replace(SELENIUM_CLASSES, "");
    };

    return {
        logResults(clientLog) {
            const logMessage = JSON.stringify(clientLog.message);
            if (isExecuting(logMessage)) {
                //logger.info(modifyLogString(logMessage));
                showLog(logMessage);
            }
        }
    };
};