module.exports = {
	options: {
		browserifyOptions: {
			debug: true
		},
	},
	main: {
		options: {
		    transform: ['hbsfy'],
		},
		files: {
			'app/public/js/bundles/index.js': ['app/src/js/index.js']
		}
	}
}