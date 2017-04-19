"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var txsvc_1 = require("txsvc");
var app_module_1 = require("../app.module");
var UserState = (function () {
    function UserState() {
    }
    return UserState;
}());
exports.UserState = UserState;
var UserService = (function () {
    function UserService() {
        this.store = txsvc_1.ServiceStore.create("user", {
            name: null,
            roles: null,
        });
    }
    Object.defineProperty(UserService.prototype, "state", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.login = function (userName, password) {
        this.store.update({
            name: userName,
            roles: ["admin"],
        });
    };
    return UserService;
}());
__decorate([
    txsvc_1.Transaction()
], UserService.prototype, "login", null);
exports.UserService = UserService;
app_module_1.appModule.service("userService", UserService);
//# sourceMappingURL=user.service.js.map