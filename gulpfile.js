const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify')

// Compile scss into css
function style() {
    return gulp.src('./public/source/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle : 'compressed',
            errLogToConsole: false,
        }).on('error', function(err){
            return notify().write(err);
        }))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(sourcemaps.write('./public/css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
        .pipe(notify({ 
            title: 'Sass',
            message: 'Estilos compilados' 
        }))
}

function watch() {
    browserSync.init({
        proxy: 'http://localhost:3030',
        port: 3030,
        ui: false,
        ignore: 'node_modules',
        injectChanges: false,
        browser: 'firefox developer edition'
    });
    gulp.watch('./public/source/scss/**/*.scss', style);
    gulp.watch('./views/**/*.html').on('change', browserSync.reload);
    gulp.watch('./public/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;