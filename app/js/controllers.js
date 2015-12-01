'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('profiles/profiles_20151201.json').success(function(data) {
    $scope.phones = data;
    $scope.phones.profiles = [];
    $scope.phones.profile_names = [];   

  });

  $scope.orderProp = 'age';
  // Item List Arrays
  $scope.items = [];
  $scope.checked = [];
  $scope.hello = "Hello";
  console.log($scope.items);
  // Add a Item to the list
  $scope.addItem = function () {
      console.log($scope.items);
      $scope.items.push($scope.itemAmount);
      console.log($scope.items);
      // Clear input fields after push
      $scope.itemAmount = "";
      $scope.itemName = "";


  };
  $scope.insertRecord = function (record, profile_id, name, surname) {

    var index = $scope.phones.profiles.indexOf(profile_id);
    if (profile_id) {
      if (index === -1 ) {
        $scope.phones.profiles.push(profile_id);
        $scope.phones.profile_names.push(name + ' ' + surname);
        record.is_checked = true;
      }
    }
    console.log($scope.phones.profiles);
  };
  $scope.removeRecord = function (record, profile_id) {

    var index = $scope.phones.profiles.indexOf(profile_id);
    if (index > -1) {
        $scope.phones.profiles.splice(index, 1);
        $scope.phones.profile_names.splice(index, 1);
        record.is_checked = false;
    }
    console.log(index, profile_id);
    console.log($scope.phones.profiles);
  };
  // Add Item to Checked List and delete from Unchecked List
  $scope.toggleChecked = function (index) {
      $scope.checked.push($scope.items[index]);
      $scope.items.splice(index, 1);
  };

  // Get Total Items
  $scope.getTotalItems = function () {
      return $scope.items.length;
  };

  // Get Total Checked Items
  $scope.getTotalCheckedItems = function () {
      return $scope.checked.length;
  };
}]);
