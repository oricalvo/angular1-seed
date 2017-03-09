import {appModule} from "./app.module";
import {ContactService} from "./contact.service";
import {UserService} from "./user.service";

export class AppComponent {
    constructor(private contactService: ContactService,
                private userService: UserService) {
    }

    loadContacts() {
        this.contactService.loadAll();
    }

    login() {
        this.userService.login("Ori", "123");
    }

    get userName() {
        return this.userService.state.name;
    }
}

appModule.component("myApp", <any>{
    controller: AppComponent,
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
