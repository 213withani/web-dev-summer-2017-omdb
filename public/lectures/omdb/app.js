(function () {
    // Usually service lets you do CRUD operations
    angular
        .module("omdbApp", ["ngRoute"])
        .config(configuration)
        .controller("searchController", searchController)
        .controller("detailsController", detailsController)
        .service("movieService", movieService);

    // From the url params grab the omdbid. Use this id 
    // to search the api by id. Then return the details of the movie. 
    function detailsController($routeParams) {
        var model = this;
        model.imdbID = $routeParams.imdbID;

        function init() {
            movieService
                .searchMovieByImdbID(model.imdbID)
                .then(renderMovie);
        }
        init;

        function renderMovie(movie) {
            model.movie = movie;
        }
    }

    function configuration($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "search.html",
                controller: "searchController",
                controllerAs: "model"
            })
            .when("/details/:imdbID", {
                templateUrl: "details.html",
                controller: "detailsController",
                controllerAs: "model"
            });
    }

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
        this.searchMovieByImdbID = searchMovieByImdbID;

        function searchMovieByImdbID(imdbID) {
            url = "http://www.omdbapi.com/?i=" + imdbID + "&apikey=852159f0";
            return $http.get(url)
                .then(function (response) {
                    //unwrap data
                    return response.data;
                });
        }

        function searchMovieByTitle(movieTitle) {
            url = "http://www.omdbapi.com/?s=" + movieTitle + "&apikey=852159f0";
            // http injected into the service method
            // Go to the url, then return the data retrieved.
            return $http.get(url)
                .then(function (response) {
                    //unwrap data
                    return response.data;
                });
        }
    }
})();