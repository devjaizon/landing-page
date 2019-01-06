var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('browser-sync', function () {

	gulp.task('browser-sync', function() {
	    browserSync.init({
	        proxy: "localhost:81",
			port: "3000",
			notify: false,
			tunnel: true
		});
	});

	gulp.watch(["*.html", "custom/stylesheets/**/*.css", "custom/scripts/**/*.js", "images/**/.png"]).on("change", reload);

});

gulp.task('default', ['browser-sync']);