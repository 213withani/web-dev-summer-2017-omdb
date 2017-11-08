(function () {
    angular
        .module("directivesApp", [])
        .controller("directiveController", directiveController)
        .directive("itemList", itemListDirective)
        .directive("hello", helloDirective);

    function itemListDirective() {
        return {
            templateUrl: "widget-list.html"
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