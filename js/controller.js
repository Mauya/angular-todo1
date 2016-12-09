angular.module('RouteControllers', [])
  .controller('HomeController', function($scope, $http){
    $scope.title = "Welcome To Swing Crew!";    
    $scope.myInterval = 3000;
    $scope.slides= [
      {
        image: "images/sjband.jpg",
        caption: "wedding1"
      },
      {
        image: "images/sjband.jpg",
        caption: "wedding2"
      },
      {
        image: "images/sjband.jpg",
        caption: "Social3"
      },
      {
        image: "images/sjband.jpg",
        caption: "Hotelgig4"
      },
      {
        image: "images/sjband.jpg",
        caption: "Hotelgig5"
      }
    ];
  })
  .controller('navController', function($scope,$location){
    $scope.isactive= function(destination){
      return destination === $location.path();
    };
  })
  
.controller(['AboutController', function($scope){
  $scope.members=[
    {
      "name":"member one",
      "img":"images/member.jpg",
      "details":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },

    {
      "name":"member Two",
      "img":"images/member.jpg",
      "details":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },

    {
      "name":"member Three",
      "img":"images/member.jpg",
      "details":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },
    
    {
      "name":"member Four",
      "img":"images/member.jpg",
      "details":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },

    {
      "name":"member Five",
      "img":"images/member.jpg",
      "details":"Duo Reges: constructio interrete. Odium autem et invidiam facile vitabis. Et quidem, inquit, vehementer errat; Quid enim est a Chrysippo praetermissum in Stoicis? Unum est sine dolore esse, alterum cum voluptate."
    },  
  ];

  $scope.subscribe = {
  name: null
  }
  $scope.submit = function() {
    if ($scope.form.$valid) {
      alert('Awesome!');
    }
  };
  }])
.controller("BookingController", function($scope){
  $scope.bookigTitle="For Special Events Make a Booking Here!";
  $scope.booking.name = "Name";
  $scope.booking.email = "Email";
  $scope.booking.phone = "phone";
  $scope.booking.date = "date";
  $scope.booking.message = "message";

  $scope.submitForm = function () {
    console.info("Here I should implement the logic to send a request to the server.");
  }
})

  .controller("MediaController", function($Scope){

    var media = [
    {
    title:"Media",
      mediaList:[
        {Audio:"Music"},
        {Visual:"Video"},
        {Pict:"Photos"}
    ]
}]
  $scope.media=media;
})

  .controller("MusicController",function($scope,ngAudio){
    $scope.music = ngAudio.load([
    {Audio:"music/Caravan palace - Dramophone.mp3"},
    {Audio:"music/Don't Stop - Little Violet.mp3"}
    {Audio:"music/Parov Stelar - Booty Swing.mp3"}
    {Audio:"music/Parov Stelar - Catgroove.mp3"}
    {Audio:"music/Sing Sing Sing - Benny Goodman.mp3"}
    {Audio:"music/Swingrowers - That's Right.mp3"}
    ]);
  })

  .controller('VideoController', function ($scope){

  })

.controller('PhotoController', function ($scope){
  $scope.images= [
    {img: "images/photo.jpg"}
    {img: "images/photo.jpg"}
    {img: "images/photo.jpg"}
    {img: "images/photo.jpg"}
    {img: "images/photo.jpg"}
    {img: "images/photo.jpg"}
    {img: "images/photo.jpg"}
  ];
})

.controller("ContactController", function(){
  var contact = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    email:"symphonycrew@sc.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.contact=contact;
});