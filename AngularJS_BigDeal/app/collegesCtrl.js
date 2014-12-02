// collegesCtrl.js 
(function () {
    "use strict";
    angular
        .module("collegesApp")
        .controller("CollegesCtrl", CollegesCtrl);

    function CollegesCtrl ()
    {
        var vm = this;
        vm.propertyOne = "Jim";
        vm.propertyTwo = 2;
        vm.colleges = {
            conference: "ACC",
            items: [{ name: "University of Miami", city: "Coral Gables", founder: false },
                    { name: "Virginia", city: "Charlottesville", founder: true },
                    { name: "Georgia Tech", city: "Atlanta", founder: false },
                    { name: "Boston College", city: "Chestnut Hill", founder: false },
                    { name: "Duke", city: "Durham", founder: true },
                    { name: "Florida State", city: "Tallahassee", founder: false },
                    { name: "North Carolina State", city: "Raleigh", founder: true },
                    { name: "Pittsburgh", city: "Pittsburgh", founder: false },
                    { name: "Clemson", city: "Clemson", founder: true },
                    { name: "Syracuse", city: "Syracuse", founder: false },
                    { name: "Wake Forest", city: "Winston-Salem", founder: true },
                    { name: "Notre Dame", city: "South Bend", founder: false },
                    { name: "Virginia Tech", city: "Blacksburg", founder: false },
                    { name: "North Carolina", city: "Chapel Hill", founder: true }]
       };
       
        vm.addCollege = function () {
           vm.colleges.items.push({ name: vm.collegename, city: "Fakesville", founder: false });
        }
    }
}());