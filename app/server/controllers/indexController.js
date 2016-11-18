
exports.index = function(request, response, next) {
    var tmdbApiKey = process.env.TMDB_API_KEY;
    var tmdbBaseUrl = process.env.TMDB_API_BASE_URL;

    response.render('index', {
        bootstrapData: {
            tmdbApiKey: tmdbApiKey,
            tmdbBaseUrl: tmdbBaseUrl,
        },
    });
}
