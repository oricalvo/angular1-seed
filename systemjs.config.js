SystemJS.config({
    map: {
        angular: "node_modules/angular/angular.js",
        text: "node_modules/systemjs-plugin-text/text.js",
        css: "node_modules/systemjs-plugin-css/css.js",
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
        }
    }
});
