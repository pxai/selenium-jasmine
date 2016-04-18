var selenium = require('selenium-webdriver');

describe('Selenium simple sample', function() {

    // Before each test open a website
    beforeEach(function(done) {
        this.driver = new selenium.Builder().
            withCapabilities(selenium.Capabilities.chrome()).
            build();

        this.driver.get('http://www.techinsight.io/').then(done);
    });

    // Close the browser after each test
    afterEach(function(done) {
        // this.driver.quit().then(done);
    });

    // Test to check the attribute of one element
    it('Should be on the home page', function(done) {
        var element = this.driver.findElement(selenium.By.tagName('body'));

        element.getAttribute('id').then(function(id) {
            expect(id).toBe('home');
            done();
        });
    });

    // Test by clicking and checking that the url changes to '/review'
    it('REVIEW link works', function(done) {
        var element = this.driver.findElement(selenium.By.linkText('REVIEW'));

        element.click();

        this.driver.getCurrentUrl().then(function(value) {
            expect(value).toContain('/review');
            done();
        });
    });
});