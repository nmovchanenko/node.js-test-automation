const ProtractorJasmineHtmlReporter = require('protractor-jasmine2-html-reporter');

module.exports = () => {
    return {
        getReporter: () => {
            "use strict";
            return new ProtractorJasmineHtmlReporter({
                savePath: 'reports/',
                screenshotsFolder: 'images',
                takeScreenshotsOnlyOnFailures: true,
                consolidate: true,
                consolidateAll: true
            });
        }
    };
};