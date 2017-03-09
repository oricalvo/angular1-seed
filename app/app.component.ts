import {appModule} from "./app.module";

export class AppComponent {
}

appModule.component("myApp", <any>{
    controller: AppComponent,
    template: require("./app.component.html"),
    styles: require("./app.component.css"),
});
