// dateentryCtrl.js 
(function () {
    "use strict";
    angular
        .module("collegesApp")
        .controller("DataEntryCtrl", DataEntryCtrl);

    function DataEntryCtrl() {
        var vm = this;
        vm.firstname = "Jim";
        vm.lastname = "Duffy";
        vm.email = "jduffy@takenote.com";
        vm.website = "www.takenote.com"

        vm.saveData = function () {
            alert("Save");
        }
    }
}());


