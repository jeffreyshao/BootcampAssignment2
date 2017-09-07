angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {

    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.searchResult = "";
    $scope.newName = "";
    $scope.newCode = "";
    $scope.newLatitude = "";
    $scope.newLongitude = "";
    $scope.newAddress = "";


    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      console.log("Something happened")
      $scope.listings.push({
            "code": $scope.newCode,
            "name": $scope.newName,
            "coordinates": {
              "latitude": $scope.newLatitude,
              "longitude": $scope.newLongitude
            },
            "address": $scope.newAddress}
      );
      $scope.newCode = "";
      $scope.newName = "";
      $scope.newLatitude = "";
      $scope.newLongitude = "";
      $scope.newAddress = "";


    };

    $scope.deleteListing = function(index) {
      var location = $scope.listings.indexOf(index);
      if (location != -1) {
        $scope.listings.splice(location, 1);
      }
    };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
    };

  }
]);
