(function () {
    angular
        .module("directivesApp", [])
        .directive("hello", helloDirective)
        ;

    function helloDirective() {
        //  alert("Hello ");
    }
}
)();