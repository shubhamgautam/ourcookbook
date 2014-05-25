'use strict';

angular.module('cookbookApp')
  .controller('MainCtrl', function ($scope) {
  	// Using AngularJS dependency injection, we've injected the $scope variable
      // Anything we attach to scope will be available to us in the view.
  
      // In this case, we're attaching a collection of Awesome Things to display
      // in app/views/main.html
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'cookbook'
    ];
  });
