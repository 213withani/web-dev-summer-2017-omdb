(function () {
    angular
        .module("myDirectives", [])
        .directive("itemList", itemListDirective)
        .directive("hello", helloDirective);

    function itemListDirective() {
        function linkFunction(scope, element) {
            var ul = element.find("ul");
            ul.sortable();
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

    function directiveController($scope) {
        $scope.message = "Hello Controller";
        $scope.widgets = [
            { "type": "HEADING" },
            { "type": "IMAGES" },
            { "type": "YOUTUBE" },
            { "type": "HTML" }
        ];
    }
})();