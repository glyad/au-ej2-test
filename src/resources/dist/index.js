"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
var aurelia_pal_1 = require("aurelia-pal");
__export(require("./tab-component/index"));
function configure(config) {
    config.globalResources([
        aurelia_pal_1.PLATFORM.moduleName('./tab-component/tabs'),
        aurelia_pal_1.PLATFORM.moduleName('./tab-component/tab-header'),
        aurelia_pal_1.PLATFORM.moduleName('./monaco-editor/monaco-editor')
    ]);
}
exports.configure = configure;
