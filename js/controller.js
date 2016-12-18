angular.module('RouteControllers', [])
  .controller('HomeController', function($scope) {
    $scope.title = 'Welcome To Swing Crew!';    
    $scope.setInterval = 3000;
    $scope.slides= [
      {
        image: "images/sjband0.jpg",
        id: 0,
        caption: "wedding0"
      },
      {
        image: "images/sjband1.jpg",
        id: 1,
        caption: "wedding1"
      },
      {
        image: "images/sjband2.jpg",
        id:2,
        caption: "Social2"
      },
      {
        image: "images/sjband3.jpg",
        id:3,
        caption: "Hotelgig3"
      },
      {
        image: "images/sjband4.jpg",
        id: 4,
        caption: "Hotelgig4"
      },
      {
        image: "images/sjband5.jpg",
        id: 5,
        caption: "Socialgig5"
      }
    ];
  });
  
app.controller(['AboutController', function($scope){
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
app.controller('BookingController', function($scope){
  $scope.bookigTitle='For Special Events Make a Booking Here!';
  $scope.booking.name = 'Name';
  $scope.booking.email = 'Email';
  $scope.booking.phone = 'phone';
  $scope.booking.date = 'date';
  $scope.booking.message = 'message';

  $scope.submitForm = function () {
    console.info("Here I should implement the logic to send a request to the server.");
  }
})

  app.controller("MediaController", function($Scope){

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

  app.controller("MusicController",function($scope,ngAudio){
    $scope.music = ngAudio.load([
    {Audio:"music/26886.mp3"},
    {Audio:"music/26886.mp3"},
    {Audio:"music/26886.mp3"},
    {Audio:"music/26886.mp3"},
    {Audio:"music/26886.mp3"},
    {Audio:"music/26886.mp3"}
    ]);
  })

  app.controller('VideoController', function ($scope){

  })

app.controller('PhotoController', function ($scope){
  $scope.images= [
    {img: "images/photo.jpg"},
    {img: "images/photo.jpg"},
    {img: "images/photo.jpg"},
    {img: "images/photo.jpg"},
    {img: "images/photo.jpg"},
    {img: "images/photo.jpg"},
    {img: "images/photo.jpg"}
  ];
})

app.controller("ContactController", function(){
  var contact = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    email:"symphonycrew@sc.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.contact=contact;
});