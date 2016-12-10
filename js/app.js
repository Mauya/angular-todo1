
var app = angular   
    .module('BandApp', ['ngRoute', 'RouteControllers', 'ui.bootstrap', 'picardy.fontawesome', 'ngAudio'])
    BandApp.config (function($routeProvider, $locationProvider){ 
    $routeProvider
    .when('/home', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController'
    })
    .when('/booking', {
        templateUrl: 'templates/booking.html',
        controller: 'BookingController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })
    .when('/gallery', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
    })
    .when('/music', {
        templateUrl: 'templates/music.html',
        controller: 'MusicController'
    })
    .when('/videos', {
        templateUrl: 'templates/video.html',
        controller: 'VideoController'
    })
    .when('/photos', {
        templateUrl: 'templates/photo.html',
        controller: 'PhotoController'
    })    
    .otherwise({
        redirectTo: "/home"
    })

    $locationProvider.html5Mode({enabled:true,requirebase:false})
});

