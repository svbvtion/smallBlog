module.exports = () => {
	$.gulp.task('webp', () => {
		return $.gulp.src(['src/static/img/**/*.*', '!src/static/img/{svg,responsive}/**/*.*'])	
			.pipe($.imageminWebp())
			.pipe($.gulp.dest('./build/static/img/'))	
	});

};