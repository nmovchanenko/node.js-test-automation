const commons = require('../../lib/commons')();


describe('Phone catalog', function() {
    const name = 'World';

    beforeEach(function() {
        browser.get("/");
    });

    it('should pass', function() {

        const nameInput = element(by.model('yourName'));
        nameInput.click();
        nameInput.clear();

        nameInput.sendKeys(name)
            .then( () => {
            element(by.xpath('//h1[@class="ng-binding"]')).getText()
            .then( text => {
                expect(text).toEqual('Hello ' + name + '!');
            });
        });


    });

    it('should fail', function() {
        element(by.model('yourName')).sendKeys(name)
            .then( () => {
                element(by.xpath('//h1[@class="ng-binding"]')).getText()
                    .then( text => {
                        expect(text).toEqual('Hello Nikolay!');
                    });
            });
    });

    it('should be no action logs', function() {
        expect(true).toBe(true);
    })
});