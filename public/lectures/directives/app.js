(function () {
    angular
        .module("directivesApp", ["myDirectives"])
        .controller("directiveController", directiveController);

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