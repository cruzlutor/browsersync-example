var gulp    = require('gulp');
var sass    = require('gulp-sass');
var bs      = require('browser-sync').create('server');


gulp.task('sass', function () {
    return gulp.src('./css/main.sass')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(bs.stream());
});

gulp.task('server', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./css/main.sass", ['sass']);
    gulp.watch("./js/main.js").on('change', bs.reload);
    gulp.watch("./index.html").on("change", bs.reload);
});

gulp.task('default', ['sass', 'server']);