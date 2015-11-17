var gulp = require('gulp');

var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// default task
gulp.task('default', ['script', 'styles', 'watch'], function(){
	console.log("GULP IS WORKING!");
});

gulp.task('script', function(){
	return gulp.src('./src/js/*.js')		
		.pipe(gulp.dest('./dist/js/'))
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./dist/css/'))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function(){
	gulp.watch('./src/js/*.js', ['script']);
	gulp.watch('./src/sass/*.scss', ['styles']);
});










