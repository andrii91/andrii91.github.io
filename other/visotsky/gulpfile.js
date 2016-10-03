var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var server = require('gulp-server-livereload');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

gulp.task('sass', function() {
    return sass('src/sass/main.scss', { sourcemap: true, style: 'compact' })
        .on('error', sass.logError)
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(rename('app.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    gulp.src([
            'src/js/component.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'));
});
gulp.task('js_v', function() {
    gulp.src([
            // 'src/js/jquery.js',
            'src/js/jquery1.9.1.js',
            'src/js/bootstrap.min.js',
            // 'src/js/inputmask.js',
            // 'src/js/jquery.inputmask.js',
            'src/js/jquery.scrollTo.js',
            'src/js/jquery.waypoints.min.js',
            // 'src/js/jqueryrotate.2.1.js',
            'src/js/jquery-ui.js',
            'src/js/xray.min.js',
            // 'src/js/looking_glass.js',
            'src/js/jquery.animateNumber.min.js',
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function(){
    return gulp.src('src/images/**/*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('images_css', function(){
    return gulp.src('src/sass/info/images/**/*.*')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/css/images'))
});

gulp.task('pages', function(){
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'))
});

gulp.task('webserver', function() {
    gulp.src('dist')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                    cb( !(/.DS_Store/.test(filePath)) );
                }
            },
            directoryListing: false,
            open: true,
            log: 'info',
            defaultFile: 'index.html'
        }));
});

gulp.task('default', function() {
    gulp.start('pages', 'js','js_v', 'sass', 'images', 'images_css', 'webserver');
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/js/*.js', ['js_v']);
    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/sass/info/images/*', ['images_css']);
    gulp.watch('src/images/**/*.*', ['images']);
});