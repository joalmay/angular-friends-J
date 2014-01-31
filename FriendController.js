app.controller("FriendController", function($scope, friendService){
	
	friendService.getFriends().success(function(data) {

			//console.log("friends", friends);	
			$scope.friends = data.results;

			//Parse Friend Count to Integer
			angular.forEach($scope.friends, function(friend) {
				friend.friend_count = parseInt(friend.friend_count, 10); //Base 10
			});
			
	});

		$scope.sortField = "name";
/*
	$scope.myFilter = function(friend){
		if (friend.name.toUpperCase().indexOf($scope.searchText.toUpperCase) != -1) {
			return true;
		} else {
			return false;
		}
	}
*/
});


