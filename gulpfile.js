var gulp = require('gulp')
var sass = require('gulp-sass')
var csso = require('gulp-csso')

gulp.task('default', ['sass'])

gulp.task('sass', function() {
	return gulp.src('sass/style.sass')
	.pipe(sass())
	.pipe(csso())
	.pipe(gulp.dest('public/stylesheets'))
})
