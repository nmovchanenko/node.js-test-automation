
describe('Phone catalog', function() {
    const name = 'World';

    beforeEach(function() {
        browser.get("/");
    });

    it('should pass', function() {
        element(by.model('yourName')).sendKeys(name)
            .then( () => {
            element(by.xpath('//h1[@class="ng-binding"]')).getText()
            .then( text => {
                console.log(text);
                expect(text).toEqual('Hello ' + name + '!');
            });
        });
    });

    it('should fail', function() {
        element(by.model('yourName')).sendKeys(name)
            .then( () => {
                element(by.xpath('//h1[@class="ng-binding"]')).getText()
                    .then( text => {
                        console.log(text);
                        expect(text).toEqual('Hello Nikolay!');
                    });
            });
    })
});