var gulp = require('gulp'),
    gulpSass = require('gulp-sass');

gulp.task('styles', function () {
    gulp.src('./src/*.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest('./css/'));
});

gulp.task('default',['styles']);