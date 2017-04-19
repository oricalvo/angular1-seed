"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = require("../app.module");
var AppComponent = (function () {
    function AppComponent(contactService, userService) {
        this.contactService = contactService;
        this.userService = userService;
    }
    AppComponent.prototype.loadContacts = function () {
        this.contactService.loadAll();
    };
    AppComponent.prototype.login = function () {
        this.userService.login("Ori", "123");
    };
    Object.defineProperty(AppComponent.prototype, "userName", {
        get: function () {
            return this.userService.state.name;
        },
        enumerable: true,
        configurable: true
    });
    return AppComponent;
}());
exports.AppComponent = AppComponent;
app_module_1.appModule.component("myApp", {
    controller: AppComponent,
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
//# sourceMappingURL=app.component.js.map