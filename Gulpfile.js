'use strict';

var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Set the browser that you want to supoprt
const AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Gulp task to minify CSS files
gulp.task('styles', function () {
  gulp.src('src/sass/style.scss')
    // Compile SASS files
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    // Auto-prefix css styles for cross browser compatibility
    .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    // Minify the file
    .pipe(csso())
    // Output
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css'))
  gulp.src('src/css/flaticon.min.css')
  .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
  .pipe(csso())
  .pipe(gulp.dest('dist/css'))
});

//Watch task
gulp.task('watch',function() {
  gulp.watch('./src/sass/**/*.scss',['styles']);
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./src/js/app.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist/js'))
});

// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./src/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

// Gulp task to minify all files
gulp.task('build', function () {
  runSequence(
    'styles',
    'scripts',
    'pages'
  );
});


/////////// my previous code
//gulp.task('styles', function() {
//  gulp.src('./src/sass/**/*.scss')
//      .pipe(sass().on('error', sass.logError))
//      .pipe(gulp.dest('././dist/css/'));
//});