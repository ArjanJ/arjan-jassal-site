var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var sass            = require('gulp-sass');
var prefix          = require('gulp-autoprefixer');
var cp              = require('child_process');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var rename          = require('gulp-rename');
var minifyCSS       = require('gulp-minify-css');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'scripts', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

function swallowError (error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

gulp.task('sass', function () {
    return gulp.src('_scss/global.scss')
        .pipe(sass({
            includePaths: ['css'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%'], { cascade: true }))
        .pipe(minifyCSS())
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['./js/*.js'])
        .on('error', swallowError)
        .pipe(concat('script.js'))
        // .pipe(rename('script.min.js'))
        // .pipe(uglify())
        .pipe(gulp.dest('./_site/js'));
});


// Watch scss files for changes & recompile
// Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function () {
    gulp.watch('_scss/**/*.scss', ['sass', 'jekyll-rebuild']);
    gulp.watch('js/*', ['scripts']);
    gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});


// Default task, running just `gulp` will compile the sass, compile the jekyll site, launch BrowserSync & watch files.
gulp.task('default', ['browser-sync', 'watch']);
