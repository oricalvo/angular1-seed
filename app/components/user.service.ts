import {ServiceStore, Transaction} from "txsvc";
import {appModule} from "../app.module";

export class UserState {
    name: string;
    roles: string[];
}

export class UserService {
    store = ServiceStore.create<UserState>("user", {
        name: null,
        roles: null,
    });

    get state() {
        return this.store.getState();
    }

    @Transaction()
    login(userName: string, password: string) {
        this.store.update({
            name: userName,
            roles: ["admin"],
        });
    }
}

appModule.service("userService", UserService);

