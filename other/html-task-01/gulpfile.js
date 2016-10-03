var gulp       = require('gulp'),
    sync       = require('browser-sync'),
    notify     = require('gulp-notify') ,
    sass       = require('gulp-sass'),
    concat     = require('gulp-concat'),
    jade       = require('gulp-jade'),
    fontello   = require('gulp-fontello');

var reload = sync.reload;

var paths = {
  src       : './src',
  jquery    : './bower_components/jquery/dist',
  bootstrap : './bower_components/bootstrap-sass/assets',
  public    : './public'
}

gulp.task('icons', function () {
  return gulp.src(paths.src + '/fontello/config.json')
    .pipe(fontello())
    .pipe(gulp.dest(paths.public))
});

gulp.task('js', function() {
  return gulp.src(paths.src + '/js/**/*.js')
    .on('error', notify.onError({
        message: 'Error JS: <%= error.message %>',
        icon: null
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(paths.public + '/js'));
});

gulp.task('img', function() {
  return gulp.src(paths.src + '/template/section/images/*')
    .on('error', notify.onError({
        message: 'Error JS: <%= error.message %>',
        icon: null
    }))
    .pipe(gulp.dest(paths.public + '/images'));
});
gulp.task('img', function() {
  return gulp.src(paths.src + '/sass/images/*')
    .on('error', notify.onError({
        message: 'Error JS: <%= error.message %>',
        icon: null
    }))
    .pipe(gulp.dest(paths.public + '/css/images'));
});

gulp.task('vendor-js', function() {
  return gulp.src([
    paths.jquery + '/jquery.min.js',
    paths.bootstrap + '/javascripts/bootstrap/button.js',
  ])
  .pipe(concat('vendor.js'))
  .pipe(gulp.dest(paths.public + '/js'));
});

gulp.task('css', function() {
  return gulp.src(paths.src + '/sass/**/*.scss')
    .pipe(sass({
        includePaths: [paths.bootstrap + '/stylesheets'],
    }))
    .on('error', notify.onError({
        message: 'Error SASS: <%= error.message %>',
        icon: null
    }))
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.public + '/css/'));
});

gulp.task('template', function() {
  return gulp.src(paths.src + '/template/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .on('error', notify.onError({
        message: 'Error Jade: <%= error.message %>',
        icon: null
    }))
    .pipe(gulp.dest(paths.public));
});

gulp.task('watch-js', ['js'], reload);
gulp.task('watch-css', ['css'], reload);
gulp.task('watch-template', ['template'], reload);
gulp.task('watch-img', ['img'], reload);

gulp.task('serve', ['build'], function () {
  sync.init({
    server: {
      baseDir: paths.public
    },
    open: false
  });

  gulp.watch(paths.src + '/js/**/*.js', ['watch-js']);
  gulp.watch(paths.src + '/sass/**/*', ['watch-css']);
  gulp.watch(paths.src + '/template/**/*', ['watch-template']);
  gulp.watch(paths.src + '/template/section/images/*', ['watch-img']);
  gulp.watch(paths.src + '/sass/images/*', ['watch-img']);
});

gulp.task('build', [
  'js',
  'vendor-js',
  'css',
  'icons',
  'img',
  'template'
]);

gulp.task('default', [
  'serve'
]);