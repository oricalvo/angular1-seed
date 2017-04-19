import * as angular from "angular";
import {appModule} from "./app.module";
import {AppComponent} from "./components/app.component";
import {AppStore, ServiceStore} from "txsvc";
import {ContactsState, ContactService} from "./services/contact.service";
import {UserService} from "./components/user.service";

const components = [
    AppComponent,
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
