(function () {
    angular
        .module("omdbApp", [])
        .controller("searchController", searchController);

    function searchController() {
        var model = this;
        //Event handler
        model.searchMovieByTitle = searchMovieByTitle;

        function init() {

        }
        init();

        function searchMovieByTitle(movieTitle) {
            alert(movieTitle);
        }
    }
})();