"use strict";

let gulp = require("gulp");
let plumber = require("gulp-plumber");
let sourcemap = require("gulp-sourcemaps");
let less = require("gulp-less");
let rename = require("gulp-rename");
let svgstore = require("gulp-svgstore");
let cheerio = require('gulp-cheerio');
let postcss = require("gulp-postcss");
let autoprefixer = require("autoprefixer");
let server = require("browser-sync").create();
let csso = require("gulp-csso");
let posthtml = require("gulp-posthtml");
let include = require("posthtml-include");
let del = require("del");
let htmlmin = require("gulp-htmlmin");
let gsmin = require('gulp-uglifyes');
let php2html = require("gulp-php2html");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/img/**", gulp.series("copy", "refresh"));
  gulp.watch("source/*.php", gulp.series("php", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("sprite", function () {
  return gulp.src("source/img/svg/*.svg")
    .pipe(cheerio({
      parserOptions: { xmlMode: true }
    }))
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img/sprite"))
});

gulp.task("php", function () {
  return gulp.src("source/*.php")
    .pipe(php2html())
    .pipe(gulp.dest("source"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("build"));
});

gulp.task("js", function () {
  return gulp.src("source/js/*.js")
    .pipe(gsmin())
    .pipe(rename(function (path) {
      path.basename += ".min";
    }))
    .pipe(gulp.dest("build/js"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("copy", function () {
  return gulp.src([
    "source/img/**"
    ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("build", gulp.series("clean", "copy", "css", "sprite", "php", "html", "js"));
gulp.task("start", gulp.series("build", "server"));
