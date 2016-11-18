// Watches files for changes and runs tasks based on the changed files
module.exports = {
	options: {
		spawn: false,
		// livereload: true
	},
	'build-js': {
		files: [
			'./app/src/js/**/*.js',
			'./app/src/js/**/*.hbs'
		],
		tasks: [
			'build-js'
		]
	},
	'build-css': {
		files: [
			'./app/src/styl/**/*.styl'
		],
		tasks: [
			'build-css'
		]
	}
}
