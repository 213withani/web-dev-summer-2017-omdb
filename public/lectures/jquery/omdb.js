(function () {
    $(init);

    function init() {
        var searchByTitleBtn = $("#searchByTitleBtn");
        var searchByTitleFld = $("#searchByTitleFld");

        searchByTitleBtn.click(searchByTitle);

        function searchByTitle() {
            alert("searchByTitle");
        }
    }
})();