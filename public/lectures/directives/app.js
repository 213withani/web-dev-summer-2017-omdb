(function () {
    angular
        .module("directivesApp", [])
        .controller("directiveController", directiveController)
        .directive("itemList", itemListDirective)
        .directive("hello", helloDirective);

    function helloDirective() {
        return {
            templateUrl: "helloWorld.html"
        };
    }

    function directiveController($scope) {
        $scope.message = "Hello Controller";
    }
})();