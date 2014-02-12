/**
 * Simple casperjs script to generate preview images of sites I've worked on
 */

phantom.casperTest = true;

var screenshotDir = "../public/img/screenshots/";
var viewPort = {
    top: 0,
    left: 0,
    width: 1280,
    height: 960,
}

var casper = require("casper").create({
    viewportSize: {
        width: viewPort.width,
        height: viewPort.height,
    },
});

casper.start("http://public-scrutiny-office.org/bills/popular", function() {
    this.capture(screenshotDir + "pso.png", viewPort);
});

casper.thenOpen("http://api.tinata.co.uk/maps/economies", function() {
    this.capture(screenshotDir + "tinatapi.png", viewPort);
});

casper.thenOpen("http://www.apple.com/downloads/dashboard/radio_podcasts/desktopradio.html", function() {
    this.capture(screenshotDir + "desktopradio.png", viewPort);
});

casper.thenOpen("http://planetside-tracker.com", function() {
    this.capture(screenshotDir + "pst.png", viewPort);
});

casper.start("http://feedback.public-scrutiny-office.org/", function() {
    this.capture(screenshotDir + "pso-feedback.png", viewPort);
});

casper.run();