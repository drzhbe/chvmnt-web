var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
// var buffer = require('vinyl-buffer');
// var cached = require('gulp-cached');
// var remember = require('gulp-remember');

var scriptsGlob = 'src/**/*.js';

gulp.task('default', ['watch', 'scripts']);

gulp.task('scripts', function() {
	var b = browserify({
		entries: './index.js',
		debug: true,
		transform: [reactify]
	});

	return b.bundle()
		.pipe(source('app.js'))
		.pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
	var watcher = gulp.watch(scriptsGlob, ['scripts']);
	watcher.on('change', function(event) {
		if (event.type === 'deleted') {

		}
	});
});