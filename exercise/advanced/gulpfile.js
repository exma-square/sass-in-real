var gulp = require('gulp'),                // 載入 gulp
    gulpSass = require('gulp-sass');       // 載入 gulp-sass，並指定給 gulpSass 這個變數

gulp.task('styles', function () {          // 'styles' 是這個任務的名稱，可以任意命名
    gulp.src('./src/*.scss')         // 指定要處理的 Sass 檔案目錄
        .pipe(gulpSass())                  // 編譯 Sass
        .pipe(gulp.dest('./css/'));  // 指定編譯後的 CSS 檔案目錄
});

gulp.task('default',['styles']);