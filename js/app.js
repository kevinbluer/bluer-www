var bluerApp = angular.module("bluerApp", ['ngRoute']);

bluerApp.config(function($routeProvider){
  $routeProvider
    .when( '/', { controller: 'HomeControlller', templateUrl: 'view-home.html' } )
    .when( '/clients', { controller: 'ClientsControlller', templateUrl: 'view-clients.html' } )
    .when( '/training', { controller: 'TrainingControlller', templateUrl: 'view-training.html' } )
    .when( '/courses', { controller: 'CoursesControlller', templateUrl: 'view-courses.html' } )
    .when( '/courses/successful-mobile-web', { controller: 'CoursesControlller', templateUrl: 'view-courses-mobile-web.html' } )
    .when( '/friends', { controller: 'FriendsControlller', templateUrl: 'view-friends.html' } )
    .when( '/contact', { controller: 'ContactControlller', templateUrl: 'view-contact.html' } )
    .when( '/china', { controller: 'ChinaControlller', templateUrl: 'view-china.html' } )
    .otherwise( { redirectTo: '/' } );
})

.controller('HomeControlller', function($scope) {
})

.controller('ClientsControlller', function($scope) {
})

.controller('CoursesControlller', function($scope) {
})

.controller('CoursesMobileWebControlller', function($scope) {
})

.controller('TrainingControlller', function($scope) {
})

.controller('FriendsControlller', function($scope) {
})

.controller('ContactControlller', function($scope) {
})

.controller('ChinaControlller', function($scope) {
});