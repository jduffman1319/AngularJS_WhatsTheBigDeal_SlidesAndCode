// appACC_05.js 

(function () {
    "use strict";
    var app = angular.module('collegesApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/',
          {
              templateUrl: '/partials/colleges.html',
              controller: 'CollegesCtrl',
              controllerAs: 'vm'
          });

        $routeProvider.when('/colleges',
          {
              templateUrl: '/partials/colleges.html',
              controller: 'CollegesCtrl',
              controllerAs: 'vm'
          });

        $routeProvider.when('/dataentry',
          {
              templateUrl: '/partials/dataentry.html',
              controller: 'DataEntryCtrl',
              controllerAs: 'vm'
          });

        $routeProvider.otherwise({ redirectTo: '/' });
    });
}());

