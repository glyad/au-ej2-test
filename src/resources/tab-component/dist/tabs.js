"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var aurelia_framework_1 = require("aurelia-framework");
function processTabs(compiler, resources, node, instruction) {
    var headerTemplate = document.createElement("template");
    headerTemplate.setAttribute("replace-part", "header");
    var contentTemplate = document.createElement("template");
    contentTemplate.setAttribute("replace-part", "content");
    resources.registerElement("tab-header", instruction.type["viewFactory"].resources.getElement("tab-header"));
    var tabs = Array.from(node.children /*.querySelectorAll("tab")*/);
    for (var i = 0; i < tabs.length; i++) {
        var tab = tabs[i];
        // add header
        var header = document.createElement("tab-header");
        header.setAttribute("tab-id", "" + i);
        header.setAttribute("name", tab.getAttribute("header"));
        header.setAttribute("is-active.bind", "activeTabId=='" + i + "'");
        header.setAttribute("tab-selector.bind", "showTab('" + i + "')");
        headerTemplate.content.appendChild(header);
        // add content
        var content = document.createElement("div");
        content.setAttribute("if", "condition.bind: activeTabId==='" + i + "'; cache: false");
        content.append.apply(content, Array.from(tab.childNodes));
        contentTemplate.content.appendChild(content);
        node.removeChild(tab);
    }
    // Activate the first tab
    var bindingEngine = aurelia_framework_1.Container.instance.get(aurelia_framework_1.BindingEngine);
    instruction.attributes = __assign(__assign({}, instruction.attributes), { "active-tab-id": bindingEngine.createBindingExpression("activeTabId", "'0'") });
    node.append(headerTemplate, contentTemplate);
    return true;
}
var Tabs = /** @class */ (function () {
    function Tabs(element) {
        this.element = element;
    }
    Tabs.prototype.showTab = function (tabId) {
        var _this = this;
        return function () {
            _this.activeTabId = tabId;
            //this.element.
        };
    };
    __decorate([
        aurelia_framework_1.bindable
    ], Tabs.prototype, "activeTabId");
    Tabs = __decorate([
        aurelia_framework_1.autoinject,
        aurelia_framework_1.processContent(processTabs)
    ], Tabs);
    return Tabs;
}());
exports.Tabs = Tabs;
