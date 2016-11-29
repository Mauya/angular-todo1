angular.module('RouteControllers', [])

    .controller('HomeController', function($scope) {
        $scope.title = "Swing Crew"

        $scope.myInterval = 3000;
        $scope.slides = [ 
        {
            image: 'images/swing1.jpg'
        },
        {
            image: 'images/swing2.jpg'
        },
        {
            image: 'images/swing3.jpg'
        },
        {
            image: 'images/swing4.jpg'
        }
        ]

  })
  .controller('AboutController', function($scope){
    $scope.members=[
      {
      "name":"memberAll",
      "img":"/images/members1.jpg"
      },

      {
        "name":"member1",
        "img":"/images/member2.jpg"
      },

      {
        "name":"member2",
        "img":"/images/member3.jpg"
      },
      
      {
        "name":"member3",
        "img":"/images/member4.jpg"
      },

      {
        "name":"member4",
        "img":"/images/member5.jpg"
      }  
    ]
    $scope.subscribe = {
    name: null
  };
  $scope.submit = function() {
    if ($scope.form.$valid) {
      alert('Awesome!');
    }
  }
})


.controller("BookingsController", function(){

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
  var Contact = {
    address:"22 Old Lane, Dublin, Ireland TY6 LP16,",
    email:"symphonycrew@sc.ie",
    telephone: "xx xxx xxxx"
  };
  $scope.Contact=Contact;
});