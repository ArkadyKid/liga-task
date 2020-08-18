const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const csso = require('gulp-csso');
const twig = require('gulp-twig');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const data = require('gulp-data');
const fs = require('fs');
const webpackStream = require('webpack-stream');

function bs(done) {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
    port: 3000,
  });
  done();
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function styles() {
  return gulp.src([
    'src/sass/index.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', notify.onError()))
    .pipe(autoprefixer(['last 4 versions']))
    .pipe(csso({
      comments: false,
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function twigGulp() {
  return gulp.src('src/index.twig').pipe(data(
    () => JSON.parse(fs.readFileSync('src/options.json')),
  )).pipe(data(
    () => JSON.parse(fs.readFileSync('src/data.json')),
  )).pipe(twig())
    .pipe(gulp.dest('dist'));
}

function scripts() {
  return gulp.src('./src/js/index.js')
    .pipe(webpackStream({
      output: {
        filename: 'index.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/js'));
}

function code() {
  return gulp.src('dist/*.html').pipe(browserSync.reload({ stream: true }));
}

function assets() {
  return gulp.src([
    'src/assets/**/*.*',
  ]).pipe(gulp.dest('dist/assets/'));
}

function watchFiles() {
  gulp.watch('src/**/*.scss', styles);
  gulp.watch('src/**/*.js', gulp.series(scripts, browserSyncReload));
  gulp.watch('src/*.twig',
    gulp.series(gulp.parallel(code, twigGulp), browserSyncReload));
  gulp.watch('src/*.json',
    gulp.series(gulp.parallel(code, twigGulp, styles), browserSyncReload));
}

const build = gulp.parallel(styles, scripts, assets, twigGulp);
const watch = gulp.parallel(watchFiles, bs);

exports.build = build;
exports.watch = watch;
exports.default = gulp.series(build, watch);
