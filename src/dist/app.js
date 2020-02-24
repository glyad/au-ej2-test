"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var aurelia_framework_1 = require("aurelia-framework");
var App = /** @class */ (function () {
    function App() {
        this.message = 'Hello World!';
        this.jsRaw = initialJs;
        this.html = initialHTML;
    }
    App.prototype.jsRawChanged = function (newValue, oldValue) {
        var functionBody = "return " + newValue;
        // tslint:disable-next-line:no-function-constructor-with-string-args
        var ctorFactory = new Function(functionBody);
        var ctor = ctorFactory();
        this.context = new ctor();
    };
    __decorate([
        aurelia_framework_1.observable()
    ], App.prototype, "jsRaw");
    return App;
}());
exports.App = App;
// tslint:disable:no-multiline-string
var initialJs = "class Foo {\n  constructor() {\n    this.firstName = 'John';\n    this.lastName = 'Doe';\n  }\n  submit() {\n    alert('You submitted \"' + this.firstName + ' ' + this.lastName + '\"');\n  }\n}";
var initialHTML = "<form class=\"ui form\" submit.delegate=\"submit()\">\n  <div class=\"field\">\n    <label>First Name</label>\n    <input type=\"text\" value.bind=\"firstName\" placeholder=\"First Name\">\n  </div>\n  <div class=\"field\">\n    <label>Last Name</label>\n    <input type=\"text\" value.bind=\"lastName\" placeholder=\"Last Name\">\n  </div>\n  <div class=\"ui message\">\n    <div class=\"header\">Your name is:</div>\n    <p>${firstName} ${lastName}</p>\n  </div>\n  <button class=\"ui button\" type=\"submit\">Submit</button>\n</form>";
