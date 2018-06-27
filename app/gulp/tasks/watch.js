var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();


gulp.task('watch', function(){
//browserSync refresh the page automaticly 
	browserSync.init({
		notify:false,
		server: {
			baseDir: "app"
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('ccsRefreshInTheBrowser');
	});

});

gulp.task('ccsRefreshInTheBrowser',['styles'], function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(browserSync.stream());
});
