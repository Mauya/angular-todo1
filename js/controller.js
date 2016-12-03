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
    
  .controller(['AboutController', function($scope){
    $scope.members=[
      {
      "name":"member one",
      "image":"images/member1.jpg"
      },

      {
        "name":"member Two",
        "image":"images/member2.jpg"
      },

      {
        "name":"member Three",
        "image":"images/member3.jpg"
      },
      
      {
        "name":"member Four",
        "image":"images/member4.jpg"
      },

      {
        "name":"member Five",
        "image":"images/member5.jpg"
      },  
    ]
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