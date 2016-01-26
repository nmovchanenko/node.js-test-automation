const config = require('./config');

exports.config = {

    // base path, that will be used to resolve files and exclude
    basepath: '../',

    baseUrl: config.get('env:local'),

    // location of the tests to be run
    specs: [
        'test/ui/*.js'
    ],

    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': [
                'incognito',
                'disable-extensions', 'start-maximized', 'enable-crash-reporter-for-testing'
            ]
        }
    },

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