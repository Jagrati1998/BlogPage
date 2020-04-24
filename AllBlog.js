// JavaScript source code
var myapp = angular.module('myApp', []);
myapp.controller('myCtrl', function ($scope) {

    $scope.NewBook = []
    $scope.Display = function () {

        $scope.AddBook =
            {
                "Name": $scope.Name,
                "Country": $scope.Country,
                "desc": $scope.desc
            };

        $scope.NewBook.push($scope.AddBook);
        $scope.Books.push($scope.AddBook);
    }
        //  $scope.Books.Name.push($scope.Name);
        // $scope.Books.Country.push($scope.Country);
        // $scope.Books.push($scope.AddBook);
        // $scope.Books.push($scope.AddBook);
        // };
          $scope.Books = [
              {
                  "Name": "Jagrati Mishra",
                  "Country": "India",
                  "desc": " Dont Let Yesterday Take Up Too Much Of Today. "
      
              }, {
                  "Name": "Jagrati Mishra",
                  "Country": "India",
                  "desc": "A day wasted on others is not wasted on ones self. "
              },
      
              {
                  "Name": "Jagrati Mishra",
                  "Country": "India",
                  "desc": "When you are able to shift your inner awareness to how you can serve others, and when you make this the central focus of your life, you will then be in a position to know true miracles in your progress toward prosperity "
              },
              {
                  "Name": " Jagrati Mishra",
                  "Country": "India",
                  "desc": "Love only grows by sharing. You can only have more for yourself by giving it away to others "
              }
    ]; 
    }  
);

