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
var ContactsState = (function () {
    function ContactsState() {
    }
    return ContactsState;
}());
exports.ContactsState = ContactsState;
var ContactService = (function () {
    function ContactService() {
        this.store = txsvc_1.ServiceStore.create("contacts", {
            data: [],
            counter: 0,
        });
    }
    Object.defineProperty(ContactService.prototype, "state", {
        get: function () {
            return this.store.getState();
        },
        enumerable: true,
        configurable: true
    });
    ContactService.prototype.loadAll = function () {
        var contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
        this.store.update({
            data: contacts
        });
    };
    return ContactService;
}());
__decorate([
    txsvc_1.Transaction()
], ContactService.prototype, "loadAll", null);
exports.ContactService = ContactService;
app_module_1.appModule.service("contactService", ContactService);
//# sourceMappingURL=contact.service.js.map