
describe('Phone catalog', function() {

    beforeEach(function() {
        browser.get("/app/#/phones");
    });

    it('should open detail page', function() {
        element(by.xpath("//a[@class='ng-binding']")).click();
        expect(element(by.xpath("//h1[@class='ng-binding ng-scope']")).getText()).toEqual("Motorola XOOM™ with Wi-Fi")
    })
});