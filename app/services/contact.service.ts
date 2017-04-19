import {ServiceStore, Transaction} from "txsvc";
import {appModule} from "../app.module";

export interface Contact {
    id: number;
    name: string;
}

export class ContactsState {
    data: Contact[];
    counter: number;
}

export class ContactService {
    store = ServiceStore.create<ContactsState>("contacts", {
        data: [],
        counter: 0,
    });

    get state() {
        return this.store.getState();
    }

    @Transaction()
    loadAll() {
        var contacts = [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
        ];

        this.store.update({
            data: contacts
        });
    }
}

appModule.service("contactService", ContactService);

