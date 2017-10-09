var gulp = require('gulp')
var sass = require('gulp-sass')
var nodemon = require('nodemon')

gulp.task('default', ['sass'])

gulp.task('sass', function() {
	return gulp.src('sass/style.sass')
	.pipe(sass())
	.pipe(gulp.dest('public/stylesheets'))
})
