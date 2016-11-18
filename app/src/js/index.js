'use strict';

var $ = require('jquery');

(function() {
  var tmdbApiKey = window.bootstrapData.tmdbApiKey;
  var tmdbBaseUrl = window.bootstrapData.tmdbBaseUrl;
  var posterBaseImageUrl = 'https://image.tmdb.org/t/p/w185';

  // function getPopulatedMovieCardMarkup(movie) {
  //   var posterPath = movie.poster_path;
  //   var originalTitle = movie.original_title;
  //   var releaseDate = movie.release_date;

  //   return (
  //     '<div class="movie-card">' +
  //       '<img class="movie-card-poster-image" src="' + posterBaseImageUrl + posterPath + '">' +
  //       '<div class="movie-card-title">' + originalTitle + '</div>' +
  //       '<div class="movie-card-release-year">' + releaseDate + '</div>' +
  //     '</div>'
  //   );
  // }

  // // Document ready.
  // $(function() {
  //   $.ajax({
  //     url: tmdbBaseUrl + 'movie/popular',
  //     data: {
  //       api_key: tmdbApiKey,
  //     },
  //     type: 'GET',
  //     dataType: 'json',
  //   })
  //     .done(function(response) {
  //       console.log('done', response);

  //       for (var i = 0; i < response.results.length; i++) {
  //         var movie = response.results[i];
  //         var markup = getPopulatedMovieCardMarkup(movie);
  //         $('.movie-cards-container').append(markup);
  //       }

  //     })
  //     .fail(function(jqXHR, textStatus, errorThrown) {
  //       console.log('fail', jqXHR);
  //     })
  //   ;
  // });

})();
