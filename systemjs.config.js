SystemJS.config({
    map: {
        angular: "node_modules/angular/angular.js",
        text: "node_modules/systemjs-plugin-text/text.js",
        css: "node_modules/systemjs-plugin-css/css.js",
        txsvc: "node_modules/txsvc",
        "zone.js": "node_modules/zone.js/dist/zone.js",
    },
    meta: {
        "angular": {
            format: "global"
        },
        "*.html": {
            loader: "text"
        },
        "*.css": {
            loader: "css"
        }

    },
    packages: {
        "app": {
            defaultExtension: "js",
        },
        "txsvc": {
            defaultExtension: "js",
            main: "index.js",
        }
    }
});
