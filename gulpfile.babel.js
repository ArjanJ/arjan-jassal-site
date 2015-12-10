'use strict';

import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import buffer from 'vinyl-buffer';
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import minifyCSS from 'gulp-minify-css';
import postcss from 'gulp-postcss';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import swig from 'gulp-swig';
import uglify from 'gulp-uglify';

const bs = browserSync.create();

const dirs = {
	src: './src',
	build: './build'
};

const paths = {
	cname: {
		src: 'CNAME',
		build: dirs.build
	},
	templates: {
		src: `${dirs.src}/templates/**/*.swig`,
		views: `${dirs.src}/templates/views/*.swig`,
		build: dirs.build
	},
	scss: {
		src: `${dirs.src}/assets/css/**/**/*.scss`,
		build: `${dirs.build}/assets/css`
	},
	js: {
		index: `${dirs.src}/js/index.js`,
		src: `${dirs.src}/js/*.js`,
		build: `${dirs.build}/js`
	}
};

gulp.task('default', ['serve']);

gulp.task('serve', ['watch'], serve);

gulp.task('watch', ['templates', 'scripts', 'styles', 'lint', 'cname'], watch);

gulp.task('templates', templates);

gulp.task('scripts', scripts);

gulp.task('styles', styles);

gulp.task('lint', lint);

gulp.task('cname', cname);

function serve() {
	bs.init({
		server: {
			baseDir: dirs.build
		},
		open: false,
		notify: false
	});
}

function watch() {
	gulp.watch(paths.templates.src, ['templates', bs.reload]);
	gulp.watch(paths.js.src, ['scripts', 'lint']);
	gulp.watch(paths.scss.src, ['styles']);
}

function templates() {
	return gulp.src(paths.templates.views)
		.pipe(swig({
			defaults: {
				cache: false
			}
		}))
		.on('error', handleError)
		.pipe(gulp.dest(paths.templates.build));
}

function scripts() {
	return browserify(paths.js.index)
		.bundle()
		.on('error', handleError)
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.build))
		.pipe(bs.stream());
}

function styles() {
	return gulp.src(paths.scss.src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', handleError)
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(rename('bundle.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(paths.scss.build))
		.pipe(bs.stream());
}

function lint() {
	return gulp.src(paths.js.src)
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
}

function cname() {
	return gulp.src(paths.cname.src)
		.pipe(gulp.dest(paths.cname.build));
}

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}