angular.module('RouteControllers', [])
    .controller('HomeController', function($scope){
        $scope.title = "Welcome To Swing Crew!";    
        $scope.myInterval = 5000;
        $scope.slides= [
          {
              image: "images/swing1.jpg"
          },
          {
              image: "images/swing2.jpg"
          },
          {
              image: "images/swing3.jpg"
          },
          {
              image: "images/swing4.jpg"
          },
        ];
      })
    .controller('navController', function($scope,$location){
      $scope.isactive= function(destination){
        return destination === $location.path();
      };
    })
    
  .controller(['AboutController', 'socialshare' function($scope, $socialshare){
    $scope.members=[
      {
      "name":"member1",
      "img":"images/member1.jpg"
      },

      {
        "name":"member2",
        "img":"images/member2.jpg"
      },

      {
        "name":"member3",
        "img":"images/member3.jpg"
      },
      
      {
        "name":"member4",
        "img":"images/member4.jpg"
      },

      {
        "name":"member5",
        "img":"images/member5.jpg"
      },  
    ]
  $scope.members=members

  $scope.subscribe = {
    name: null
  }
  $scope.submit = function() {
    if ($scope.form.$valid) {
      alert('Awesome!');
    }
  }
  $Socialshare.share=function(){
      'providers':'twitter', 'facebook', 'youtube',
      'attrs': {
        'socialshareUrl': 'http://720kb.net'
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


.controller("MediaController", function(){

var media = [
{
  title: "Media",
    mediaList:[
      {Audio:"Music"},
      {Visual:"Video"},
      {Pict:"Photos"}

    ]
}]
  $scope.media=media;
})

.controller("ContactController", function(){
  var contact = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    email:"symphonycrew@sc.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.contact=contact;
});