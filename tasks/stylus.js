module.exports = {
    index: {
        options: {
            // linesnos: true,
            // compress: true,
            "include css": true,
            // sourcemap: {
            //     inline: true
            // }
        },
        files: {
            'app/public/css/index.css': ['app/src/styl/index.styl'],
        }
    }
}