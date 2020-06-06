const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const sass = require("gulp-sass");
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
const autoprefixer = require('gulp-autoprefixer');

function minifyCSS(done) {
      src('src/css/**.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(dest('dist/css'));
      done()
}

function minifyJS(done){
    src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true,

        }))
        .pipe(dest('dist/js/'));
    src('src/js/**.min.js')
        .pipe(dest('dist/js/'));
    done();
}

function minifyHTML(done) {
    src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('dist'));
    done()
}
function php(done) {
    src('src/**.php')
        .pipe(dest('dist'));
    src('src/phpmailer/**/**')
        .pipe(dest('dist/phpmailer/'));
    done();
}
function fonts(done) {
    src('src/fonts/**/**')
        .pipe(dest('dist/fonts/'));
    done();
}

function minifyIMG(done) {
    src('src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({key: 'yTqLWYR5pCByFslJMlH4zZXL09Yc6vYr',}))
        .pipe(dest('dist/img/'));
    src(['src/img/**/*.ico', 'src/img/**/*.svg'])
        .pipe(dest('dist/img/'))
    done();
}

function style() {
  return src('./src/sass/**/*.sass', './src/sass/**/*.scss')
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest('./src/css'))
      .pipe(browserSync.stream())
}

function server() {
  style();
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  })
  watch("./src/sass/**/*.sass", style);
  watch("./src/sass/**/*.scss", style);
  watch("./src/js/**/*.js").on('change', browserSync.reload);
  watch("./src/*.html").on('change', browserSync.reload);
}

exports.server = server;
exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;
exports.minifyHTML = minifyHTML;
exports.minifyIMG = minifyIMG;
exports.minifyAll = series(minifyCSS, minifyHTML, php, fonts, minifyJS, minifyIMG);

