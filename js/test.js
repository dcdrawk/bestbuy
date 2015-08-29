'use strict';

angular.module('testApp', [])
  .controller('TestController', function($scope, $rootScope) {
    var testPage = this;
    //$scope.rating = 3;
    
    //default for product protection plan
    $rootScope.protectionPlan = 0;
    
    //Seperate the top features/specs for simplicity
    $scope.topFeatures = [{
      feature:'3G',
      description:'3G, short form of third generation, is the third generation of mobile telecommunications'
    },{
      feature:'6’’ Touchscreen',
      description:'A touchscreen is an input device normally layered on the top of an electronic visual display of an information processing system.Use our Touchscreen Selector to sort, search and filter.'
    },{
      feature:'Browse the Web',
      description:'The address bar is your starting point for browsing the web, with a combined address bar and search box so you can surf, search, or get suggestions all from Google.'
    },{
      feature:'Wi-Fi Capable',
      description:'If it is compliant or partly compatible, the Wi-Fi Alliance may not object to its description as a Wi-Fi device though technically only certified devices are approved.'
    },{
      feature:'Camera',
      description:'A camera is an optical instrument that records images that can be stored directly, transmitted to another location, or both. These images may be still photographs.'
    }];
    
    $scope.specs = {
      general:[{
        title: '4G Network',
        info: 'GSM 850 / 900 / 1800 / 1900 SIM'
      },{
        title: '3G Network',
        info: 'HSDPA 850 / 900 / 1900 / 2100'
      },{
        title: 'SIM',
        info: 'Micro SIM'
      }],
      display:[{
        title: 'Type',
        info: 'Super AMOLED Capacative  Touchscreen'
      },{
        title: 'Size',
        info: '122 mm  x 66 mm (3.24 x 2.34 inches)'
      }],
      body:[{
        title: 'Dimensions',
        info: '137 mm x 71mm (5.38 x 2.75 inches)'
      },{
        title: 'Weight',
        info: '220 grams (1.2LBs'
      }],
      sound:[{
        title: 'Alert Types',
        info: 'Vibration, MP3, Ringtones'
      }]
    }
    
    $scope.reviews = [{
      overall: 4,
      value: 4,
      price: 4,
      quality: 5,
      title: 'GREAT PHONE!!',
      author: 'Adam Ginther',
      date: 'August 6',
      review: 'nothing comes close to this baby. The S Pen gives you versatility. You don\u0027t think you will use it much at first... But I have come to rely on it in situations that I need to be precise or jot down quick notes. I love how precise it is, to the point where my handwriting looks like my own. The camera is superb, Samsung really did good in adding in the image stabilization to this phone.'
    },{
      overall: 4,
      value: 1,
      price: 4,
      quality: 2,
      title: 'The best Android phone yet.',
      author: 'Chris Saunders',
      date: 'August 2',
      review: 'I moved up from a Samsung Galaxy 3, to the Samsung Note 4....Big move...the Note 4 is more phone/camera than I expected...the (magic) pen is awasome. Good job Samsung..best among the phablets available in the market now.....really awesome Absolutely, without doubt, the best phone ever made by men. Samsung got it right this time.'
    },{
      overall: 4,
      value: 4,
      price: 5,
      quality: 2,
      title: 'Not as good as Windows Phone',
      author: 'Thales Pinheiro',
      date: 'July 22',
      review: 'My experience with the Samsung Galaxy Note 4 has been an amazing and very enviable mobile encounter. I got the phone from Best Buy at the end of November... A couple days before Black Friday. First off, the display is beautiful. The best I have seen on a smartphone so far. I have seen and played with multiple devices like the iPhone 6 and iPhone 6 Plus.' 
    }];
    
    testPage.phone = {
      brand:'Samsung',
      name:'Galaxy S5',
      price:719.99,
      summary:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum',
//      protectionPlan: {
//        oneYear:'60.00',
//        twoYear:'105.00'
//      }
      features: chunk($scope.topFeatures, Math.round($scope.topFeatures.length/2)),
      specs: $scope.specs,
      reviews: $scope.reviews
    }
    
//    $scope.getNumber = function(num) {
//      return new Array(num);   
//    }

//    todoList.todos = [
//      {text:'learn angular', done:true},
//      {text:'build an angular app', done:false}];
// 
//    todoList.addTodo = function() {
//      todoList.todos.push({text:todoList.todoText, done:false});
//      todoList.todoText = '';
//    };
// 
//    todoList.remaining = function() {
//      var count = 0;
//      angular.forEach(todoList.todos, function(todo) {
//        count += todo.done ? 0 : 1;
//      });
//      return count;
//    };
// 
//    todoList.archive = function() {
//      var oldTodos = todoList.todos;
//      todoList.todos = [];
//      angular.forEach(oldTodos, function(todo) {
//        if (!todo.done) todoList.todos.push(todo);
//      });
//    };

    //Protection Plan selection
    $rootScope.selectPlan = function(plan, price) {
      console.log($rootScope.protectionPlan);
      switch(plan){
        case 'oneYear':
          if($scope.oneYear == false){
            $rootScope.protectionPlan = 0;
            break;
          } else {
            $scope.twoYear = false;
            $rootScope.protectionPlan = parseInt(price);
            break;
          }
        case 'twoYear':
          if($scope.twoYear == false){
            $rootScope.protectionPlan = 0;
            break;
          } else {
            $scope.oneYear = false;
            $rootScope.protectionPlan = parseInt(price);
            break;
          }  
      }
    }
    
    //Array Chunking
    //from example: http://stackoverflow.com/questions/21644493/how-to-split-the-ng-repeat-data-with-three-columns-using-bootstrap
    function chunk(arr, size) {
      var newArr = [];
      for (var i=0; i<arr.length; i+=size) {
        newArr.push(arr.slice(i, i+size));
      }
      console.log(size);
      return newArr;
    }
    

  })
  
  
  
  
  //Star Rating Directive
  .directive('starRating', function() {
    return {
      restrict: 'E',      
      scope: {
        rating: '='
      },
      templateUrl: '../templates/star-rating.html',
      link : function ($scope) {
        $scope.getNumber = function(num) {
          var numArray = new Array(num);
          return new Array(num);
        }
      }
    };  
  })
  
  //Quantity Directive
  .directive('quantity', function() {
    return {
      restrict: 'E',      
      scope: {
        max: '=',
        price: '='
      },
      templateUrl: '../templates/quantity.html',      
      link : function ($scope, $rootScope) {
        //set the default quanity to 1
        $scope.quantity = '1';
        
        //turn a number into an array of digits
        $scope.getNumber = function(num) {
          var numArray = new Array(num);
          return new Array(num);   
        }
        
        $scope.setQuantity = function(num) {
          $scope.quantity = num;
          console.log($rootScope.protectionPlan);
        }
      }
    };
  })  
  
  //Product Protection Plan Directive
  .directive('protectionPlan', ['$rootScope', function($rootScope) {
    return {
      restrict: 'E',      
//      scope: {
//        prices: '='
//      },
      templateUrl: '../templates/protection-plan.html'
    }
  }])
  
  //Review Score Directive
  .directive('reviewSummary', function() {
    return {
      restrict: 'E',      
      scope: {
        score: '='
      },
      templateUrl: '../templates/review-summary.html'
    };  
  })
  
  //Bar Ratings Directive
  .directive('barRatings', function() {
    return {
      restrict: 'E',      
      scope: {
        value: '=',
        price: '=',
        quality: '='
      },
      templateUrl: '../templates/bar-ratings.html',
      link : function ($scope) {
        $scope.getNumber = function(num) {
          var numArray = new Array(num);
          return new Array(num);
        }
      }
    };  
  })