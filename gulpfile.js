const gulp = require('gulp');
const cssNano = require('gulp-cssnano');
const postCss = require('gulp-postcss');
const postCssAutoprefixer = require('autoprefixer');
const postCssLogical = require('postcss-logical');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();

const config = {
	browserSync: true,
	src: './src',
	dest: './dist',
	glob: {
		css: [`./src/*.scss`, `./src/**/*.scss`],
		markup: [`./test-server/*.html`]
	}
};

/**
 * Optimise CSS
 *
 * Combine and minify CSS files
 */
function compileCSS() {
	let stream = gulp
		.src(`${config.src}/underscores.scss`)
		.pipe(sass().on('error', sass.logError))
		.pipe(postCss([postCssAutoprefixer(), postCssLogical()]))
		.pipe(cssNano())
		.pipe(gulp.dest(config.dest));

	if (config.browserSync) {
		stream.pipe(browserSync.stream());
	}

	return stream;
}

/**
 * Watch CSS
 *
 * run formatting and optimisation on save
 */
function watch() {
	gulp.watch(config.glob.css, gulp.series('compile-css'));
	gulp.watch(config.glob.markup, browserSync.reload);
}

/**
 * Serve
 *
 * Starts up a BrowserSync server and runs the watch task
 */
function serve(done) {
	if (!config.browserSync) {
		throw 'BrowserSync is switched off, enable it in your Gulpfile.';
	}

	browserSync.init({
		server: 'test-server'
	});

	done();
}

// Register Tasks
gulp.task('compile-css', compileCSS);
gulp.task('default', gulp.series('compile-css'));
gulp.task('watch', watch);
gulp.task('serve', gulp.parallel(serve, 'watch'));
