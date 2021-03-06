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
    'node_modules/jquery/dist/jquery.js',
    'source/js/main.js'
  ])
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('build/js'))
  .pipe(server.stream())
}

function copy() {
  return src([
    'source/*.html'
  ], {
    base: 'source'
  })
  .pipe(dest('build'))
}

function clean() {
  return del('build');
}

function watching() {
  watch(['source/less/**/*.less'], series(styles, refresh));
  watch(['source/js/**/*.js'], series(scripts, refresh));
  watch(['source/*.html'], series(copy, refresh));
}

function refresh(done) {
  server.reload();
  done();
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

exports.build = series(clean, styles, scripts, copy);
exports.start = parallel(browserSync, watching);
