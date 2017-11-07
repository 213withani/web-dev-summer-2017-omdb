(function () {
    $(init);

    function init() {
        // Bind to the html tags
        var searchByTitleBtn = $("#searchByTitleBtn");
        var searchByTitleFld = $("#searchByTitleFld");

        // Event handler
        searchByTitleBtn.click(searchByTitle);

        function searchByTitle() {
            var movieTitle = searchByTitleFld.val();
            url="www.omdbapi.com/?s="+movieTitle+"&apikey=852159f0"
            $.ajax({
                url: url,
                success: renderMovies,
                error:function () {
                    alert("oops");
                } 
            });
        }
        function renderMovies(response) {
            console.log(response);
        }
    }
})();