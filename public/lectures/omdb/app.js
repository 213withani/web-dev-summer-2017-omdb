(function () {
    angular
        .module("omdbApp", [])
        .controller("searchController", searchController);

    function searchController() {
        var model = this;
        model.searchMovieByTitle = searchMovieByTitle;

        function init() {

        }
        init();

        function searchMovieByTitle() {
            alert("searchMovieByTitle");
        }
    }
})();