import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./app.component";
import {AppStore, ServiceStore} from "txsvc";
import {ContactsState, ContactService} from "./contact.service";
import {ContactListComponent} from "./contactList.component";
import {UserService} from "./user.service";

const components = [
    AppComponent,
    ContactListComponent
];

const services = [
    ContactService,
    UserService,
];

export interface AppState {
    contacts: ContactsState;
}

const appStore = new AppStore<AppState>();

appModule.run(function(contactService: ContactService, userService: UserService) {
    appStore.init([
        contactService.store,
        userService.store,
    ]);

    contactService.loadAll();

    console.log("run");
});

angular.bootstrap(
    document.querySelector("html"),
    [appModule.name]);
