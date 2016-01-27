const config = require('./config');

exports.config = {

    baseUrl: config.get('env:angularjs'),

    sauceUser: config.get('sauce:name'),

    sauceKey: config.get('sauce:key'),

    specs: [
        'test/ui/*.js'
    ],

    capabilities: {
        'browserName': "chrome",
        "platform": "OS X 10.9",
        "name": "run test on OS X",
        "build": "build-19902",
        "tags": ["tag1","tag2","tag3"],
        "passed": "true",
        "recordVideo": false
    },

    /*multiCapabilities: [{
        'browserName': "chrome",
        "platform": "OS X 10.9",
        "name": "run test on OS X",
        "build": "build-19902",
        "tags": ["tag1","tag2","tag3"],
        "passed": "true",
        "recordVideo": false
    }, {
        'browserName': 'safari',
        "build": "build-19902",
        "passed": "true",
        'platform': 'OS X 10.10',
        "recordVideo": false,
        'name': 'Mac Safari'
    }],*/

    allScriptsTimeout: 100000,

    framework: 'jasmine2',

    onPrepare: function() {
        const htmlReporter = require('./lib/htmlReporter.js')();

        jasmine.getEnv().addReporter(htmlReporter.getReporter());

        beforeAll(function () {

        });

        afterAll(function () {

        });

    },

    jasmineNodeOpts: {
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 100000
    },

    params: {
        admin: {
            email: '',
            pass: ''
        },
        user: {
            email: '',
            pass: ''
        }
    }
};