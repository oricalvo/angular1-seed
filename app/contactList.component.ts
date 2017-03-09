import {appModule} from "./app.module";
import {Contact, ContactService} from "./contact.service";

export class ContactListComponent {
    //contacts: Contact[];

    constructor(private contactService: ContactService) {
    }

    get contacts() {
        return this.contactService.state.data;
    }
}

appModule.component("myContactList", <any>{
    controller: ContactListComponent,
    template: require("./contactList.component.html"),
    styles: require("./contactList.component.css"),
});
