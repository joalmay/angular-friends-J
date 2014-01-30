app.controller("FriendController", function($scope, $http){
	
	$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json")
		.success(function(data) {

			//console.log("friends", friends);	
			$scope.friends=data.results;
			
			});

	//$scope.name = "Hello World!";
	//console.log("My Ctrl is working!");
	//$scope.urlpic = "https://scontent-a.xx.fbcdn.net/hprofile-ash3/833_10200838803828124_1233160321_a.jpg";
     //$scope.location = "Status: I hate the snow. I wish I was on the beach right now!!! ";



});


