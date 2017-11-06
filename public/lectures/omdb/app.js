(function () {
    // Usually service lets you do CRUD operations
    angular
        .module("omdbApp", [])
        .controller("searchController", searchController)
        .service("movieService", movieService);

    function searchController(movieService) {
        var model = this;
        //Event handler
        model.searchMovieByTitle = searchMovieByTitle;

        function init() {

        }
        init();

        function searchMovieByTitle(movieTitle) {
            movieService
                .searchMovieByTitle(movieTitle)
                .then(renderMovies);
        }

        function renderMovies(movies) {
            //instance controller = server info
            // when you get the movies back, display them
            model.movies = movies;
        }
    }

    function movieService($http) {
        this.searchMovieByTitle = searchMovieByTitle;

        function searchMovieByTitle(movieTitle) {
            url = "http://www.omdbapi.com/?s=" + movieTitle + "&apikey=852159f0";
            // http injected into the service method
            // Go to the url, then return the data retrieved.
            return $http.get(url)
                .then(function (response) {
                    //unwrap data
                    return response.data;
                })
                ;
        }
    }
})();