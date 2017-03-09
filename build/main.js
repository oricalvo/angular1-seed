const path = require("path");
const shelljs = require("shelljs");
const open = require("open");
const port = 8081;

function dev() {
    console.log("Compiling typescript");
    let code = shelljs.exec(path.normalize("node_modules/.bin/tsc"));
    if(code != 0) {
        throw new Error("Typescript compilation failed");
    }

    console.log("Compiling SASS");
    code = shelljs.exec(path.normalize("node_modules/.bin/node-sass") + " -r ./app -o ./app");
    if(code != 0) {
        throw new Error("SASS compilation failed");
    }

    console.log("Run Web Server");
    shelljs.exec(path.normalize("node_modules/.bin/http-server") + " -p " + port, {
        async: true
    });

    console.log("Open browser");
    open(`http://localhost:${port}`);
}

module.exports = {
    dev: dev,
};
