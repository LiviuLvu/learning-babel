var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6', function() {
   return gulp.src('source/script.js')
      .pipe(babel({
         presets: ['es2015']
      }))
      .pipe(gulp.dest('build'));
});
gulp.task('default', ['es6'], function() {
   gulp.watch('source/script.js', ['es6'])
});
