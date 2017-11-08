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
            url = "http://www.omdbapi.com/?s=" + movieTitle + "&apikey=852159f0"
            $.ajax({
                url: url,
                success: renderMovies,
                error: function () {
                    alert("oops");
                }
            });
        }

        function renderMovies(response) {
            console.log(response);

            var table = $("<table>");
            table.addClass("table");

            for (var m in response.Search) {
                var movie = response.Search[m];
                // Creating a table row and appending each td for each column
                var tr = $("<tr>");
                // column
                var td = $("<td>");
                td.append(movie.Title);
                tr.append(td);

                var img = $("<img>");
                img.attr("src", movie.Poster);
                img.attr("height", "100");
                // column
                td = $("<td>");
                td.append(img);
                tr.append(td);

                table.append(tr);
            }
            $("#searchResults").append(table);
            table.sortable();
        }
    }
})();