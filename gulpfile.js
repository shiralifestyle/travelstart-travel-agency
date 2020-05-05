const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('scss/*.scss')
      .pipe(sass({
        outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
   
  gulp.task('sass:watch', function () {
    gulp.watch('scss/*.scss', ['sass']);
  });


  gulp.task('default', function() {
    gulp.run('sass');
    gulp.run('sass:watch');
  });