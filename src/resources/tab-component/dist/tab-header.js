"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var aurelia_framework_1 = require("aurelia-framework");
var TabHeader = /** @class */ (function () {
    function TabHeader() {
        this.tabSelector = function (id) { };
    }
    __decorate([
        aurelia_framework_1.bindable
    ], TabHeader.prototype, "tabId");
    __decorate([
        aurelia_framework_1.bindable
    ], TabHeader.prototype, "isActive");
    __decorate([
        aurelia_framework_1.bindable
    ], TabHeader.prototype, "name");
    __decorate([
        aurelia_framework_1.bindable
    ], TabHeader.prototype, "tabSelector");
    return TabHeader;
}());
exports.TabHeader = TabHeader;
