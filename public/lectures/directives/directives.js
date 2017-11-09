(function () {
    angular
        .module("myDirectives", [])
        .directive("itemList", itemListDirective)
        .directive("hello", helloDirective);

    function itemListDirective($http) {
        function linkFunction(scope, element) {

            var ul = element.find("ul");
            var startIndex = -1;
            var endIndex = -1;

            ul.sortable({
                start: function (event, ui) {
                    startIndex = $(ui.item).index();
                },
                stop: function (event, ui) {
                    endIndex = $(ui.item).index();
                    $http.put("/api/widgets/123?start=" + startIndex + "&endIndex=" + endIndex);
                }
            });
        }
        return {
            templateUrl: "widget-list.html",
            link: linkFunction
        }
    }

    function helloDirective() {
        return {
            templateUrl: "helloWorld.html"
        }
    }
})();