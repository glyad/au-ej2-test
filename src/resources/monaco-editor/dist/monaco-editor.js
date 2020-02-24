"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var aurelia_binding_1 = require("aurelia-binding");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_pal_1 = require("aurelia-pal");
var monaco = require("monaco-editor");
var MonacoEditor = /** @class */ (function () {
    function MonacoEditor(tq) {
        var _this = this;
        this.handleResize = function () {
            if (!(_this.editor === null || _this.editor === undefined)) {
                _this.editor.layout();
            }
        };
        this.tq = tq;
        this.isLoaded = false;
        this.isUpdatingCode = false;
        this.isUpdatingEditorValue = false;
    }
    MonacoEditor.prototype.attached = function () {
        var _this = this;
        aurelia_pal_1.PLATFORM.addEventListener("resize", this.handleResize);
        this.editorHost.addEventListener("resize", this.handleResize);
        this.editor = monaco.editor.create(this.editorHost, this.options);
        this.isLoaded = true;
        if (this.needsUpdateEditorValue) {
            this.needsUpdateEditorValue = false;
            this.updateEditorValue();
        }
        this.editor.onDidChangeModelContent(function () {
            _this.updateCode();
        });
    };
    MonacoEditor.prototype.detached = function () {
        aurelia_pal_1.PLATFORM.removeEventListener("resize", this.handleResize);
        this.editor.dispose();
        this.isLoaded = false;
    };
    MonacoEditor.prototype.codeChanged = function () {
        this.updateEditorValue();
    };
    MonacoEditor.prototype.updateCode = function () {
        var _this = this;
        if (!this.isUpdatingEditorValue) {
            this.isUpdatingCode = true;
            this.code = this.editor.getValue();
            this.tq.queueMicroTask(function () {
                _this.isUpdatingCode = false;
            });
        }
    };
    MonacoEditor.prototype.updateEditorValue = function () {
        var _this = this;
        if (!this.isUpdatingCode && /String/.test(Object.prototype.toString.call(this.code))) {
            if (this.isLoaded) {
                this.isUpdatingEditorValue = true;
                this.editor.setValue(this.code);
                this.tq.queueTask(function () {
                    _this.isUpdatingEditorValue = false;
                });
            }
            else {
                this.needsUpdateEditorValue = true;
            }
        }
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.toView })
    ], MonacoEditor.prototype, "options");
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.fromView })
    ], MonacoEditor.prototype, "editor");
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_binding_1.bindingMode.twoWay })
    ], MonacoEditor.prototype, "code");
    MonacoEditor = __decorate([
        aurelia_framework_1.customElement("monaco-editor")
    ], MonacoEditor);
    return MonacoEditor;
}());
exports.MonacoEditor = MonacoEditor;
