// 'use strict';

// app.controller('LoginCtrl', function($scope, $route, $mdDialog, dataService, timerService, $window) {
// 	$scope.user = {
// 		username: "",
// 		password: ""
// 	}

// 	$scope.remember = false;
// 	$scope.status = "";

// 	$scope.login = function () {
// 		dataService.postData("/authenticate", $scope.user, function(data){	
// 			if (data.success){
// 				data.remember  = $scope.remember;
// 				dataService.setAuthToken(data);
// 				//$mdDialog.hide(data);
// 			 	 $window.location.href = '/dashboard.html';
// 			} else {
// 				$mdDialog.hide(false);
// 			}
// 		}, function(error){
// 			$scope.status = "Please check your login details";
// 		});
// 	}

// 	$scope.cancel = function () {
// 		$mdDialog.cancel();
// 	}
// });
