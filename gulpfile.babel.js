'use strict';

import autoprefixer from 'autoprefixer';
import browserify from 'browserify';
import browserSync from 'browser-sync';
import buffer from 'vinyl-buffer';
import critical from 'critical';
import ghPages from 'gulp-gh-pages';
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
		views: `${dirs.src}/templates/views/**/*.swig`,
		build: dirs.build
	},
	scss: {
		src: {
			abby: `${dirs.src}/assets/css/abby/**/*.scss`,
			site: `${dirs.src}/assets/css/site/**/*.scss`,
			resume: `${dirs.src}/assets/css/resume/*.scss`
		},
		build: `${dirs.build}/assets/css`
	},
	js: {
		index: `${dirs.src}/js/index.js`,
		src: `${dirs.src}/js/*.js`,
		build: `${dirs.build}/js`
	},
	assets: {
		src: `${dirs.src}/assets/**`,
		build: `${dirs.build}/assets`
	},
	favicon: {
		src: `${dirs.src}/assets/favicon/*`,
		build: `${dirs.build}/assets/favicon`
	},
	images: {
		src: `${dirs.src}/assets/img/*`,
		build: `${dirs.build}/assets/img`
	},
	deploy: `${dirs.build}/**/*`
};

gulp.task('default', ['serve']);

gulp.task('serve', ['watch'], serve);

gulp.task('watch', ['templates', 'scripts', 'styles', 'lint', 'cname', 'assets'], watch);

gulp.task('templates', templates);

gulp.task('scripts', scripts);

gulp.task('styles', ['siteStyles', 'resumeStyles']);

gulp.task('siteStyles', function() {
	return styles(paths.scss.src.site, paths.scss.build, 'bundle');
});

gulp.task('resumeStyles', function() {
	return styles(paths.scss.src.resume, paths.scss.build, 'resume');
});

gulp.task('critical', ['templates', 'styles'], criticalCSS);

gulp.task('lint', lint);

gulp.task('cname', cname);

gulp.task('assets', assets);

gulp.task('deploy', deploy);

// Manually run 'critcal'.

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
	gulp.watch([paths.scss.src.abby, paths.scss.src.site, paths.scss.src.resume], ['styles']);
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

function styles(src, dest, name) {
	return gulp.src(src)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.on('error', handleError)
		.pipe(postcss([
			autoprefixer()
		]))
		.pipe(minifyCSS())
		.pipe(rename(`${name}.css`))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest(dest))
		.pipe(bs.stream());
}

function criticalCSS() {
	critical.generate({
		inline: true,
    base: './build/',
    src: 'index.html',
    dest: './build/index.html',
    minify: true,
    width: 1280,
    height: 800
	})
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

function assets() {
	return gulp.src([paths.assets.src, `!src/assets/{css,css/**}`])
		.pipe(gulp.dest(paths.assets.build));
}

function deploy() {
	return gulp.src(paths.deploy)
		.pipe(ghPages());
}

function handleError(err) {
	console.log(err.toString());
	this.emit('end');
}