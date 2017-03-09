const gulp = require("gulp");
const {dev} = require("./build/main");

gulp.task("dev", function() {
    dev();
});
