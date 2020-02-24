"use strict";
exports.__esModule = true;
var environment = require("../config/environment.json");
var aurelia_pal_1 = require("aurelia-pal");
function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature(aurelia_pal_1.PLATFORM.moduleName('resources/index'));
    aurelia.use
        .plugin(aurelia_pal_1.PLATFORM.moduleName('au-ej2-plugin'))
        .plugin(aurelia_pal_1.PLATFORM.moduleName('aurelia-highlightjs'))
        .plugin(aurelia_pal_1.PLATFORM.moduleName('aurelia-dynamic-html'));
    aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');
    if (environment.testing) {
        aurelia.use.plugin(aurelia_pal_1.PLATFORM.moduleName('aurelia-testing'));
    }
    aurelia.start().then(function () { return aurelia.setRoot(aurelia_pal_1.PLATFORM.moduleName('app')); });
}
exports.configure = configure;
