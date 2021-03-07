const { src, dest, watch, series, parallel } = require('gulp');

const less = require('gulp-less');
const rename = require('gulp-rename');
const server = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const plumber = require('gulp-plumber');
const sourcemap = require('gulp-sourcemaps');
const csso = require("gulp-csso");
const pug = require("gulp-pug");

function styles() {
  return src('source/less/style.less')
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less({compress: true}))
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(rename('style.min.css'))
    .pipe(sourcemap.write("."))
    .pipe(dest('build/css'))
    .pipe(server.stream())
}

function scripts() {
  return src([
    'source/js/*.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('build/js'))
  .pipe(server.stream())
}

function html() {
  return src('source/pug/*.pug').
  pipe(pug({
    pretty: true
  }))
  .pipe(dest('build'))
}

function clean() {
  return del('build');
}

function watching() {
  watch(['source/less/**/*.less'], series(styles, refresh));
  watch(['source/js/**/*.js'], series(scripts, refresh));
  watch(['source/pug/*.pug'], series(html, refresh));
}

function refresh(done) {
  server.reload();
  done();
}

function copy() {
  return src([
    './source/fonts/*.{woff,woff2}'
  ], {
    base: 'source'
  })
  .pipe(dest('build'));
}

function browserSync() {
  server.init({
    server: 'build/',
    notify: false,
    open: false,
    cors: true,
    ui: false
  })
}

exports.build = series(clean, styles, scripts, html, copy);
exports.start = parallel(browserSync, watching);
