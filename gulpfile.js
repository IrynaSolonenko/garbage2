let gulp = require('gulp');

gulp.task('transform', ()=>{
    return gulp.src('garbage.js')
        .pipe(gulp.dest('dest'))
        .pipe(gulp.dest('src'))
})