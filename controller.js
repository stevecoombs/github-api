var app = angular.module('github-api');

app.controller('GitHubController', function(githubService, $scope){
	$scope.getUserData = function(){
		githubService.getUser($scope.searchText).then(function(res){
		$scope.user = res.data
	})
	}
})

